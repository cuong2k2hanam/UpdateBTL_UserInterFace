import { View, Text } from "react-native";
import React, { useContext, createContext, useState, useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BookScreen from "../screens/BookScreen/BookScreen";
import BookNavigation from "./BookNavigation";
import UserScreen from "../screens/UserScreen/UserScreen";
import UserNavigation from "./UserNavigation";

import { writeUserInfo } from "../firebase/UserInfo";

// import { AppContext } from "../context/AppProvider";

import { theme } from "../theme";

const Tab = createMaterialBottomTabNavigator();

export const UserContext = createContext();

export default function HomeNavigation({ route, navigatiion }) {
  // const context = useContext(AppContext);
  // console.log("HomeNavigation");
  // console.log(context);
  const { email, userInfo } = route.params;
  const [user, setUser] = useState(userInfo);
  const [change, setChange] = useState(false);
  console.log("Change: " + change);

  useEffect(() => {
    if (change) {
      writeUserInfo(email, user);
      setChange(false);
    }
  }, [change]);
  // console.log(user);
  return (
    <UserContext.Provider
      value={{
        user: user,
        email: email,
        setUser: setUser,
        change: change,
        setChange: setChange,
      }}
    >
      <Tab.Navigator
        initialRouteName="HomeScreen"
        inactiveColor={theme.colors.iconActive}
        activeColor={theme.colors.iconActive}
        barStyle={{ backgroundColor: "#D9D9D9" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name == "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name == "BookNavigation") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name == "UserScreen") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={26} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          initialParams={{ email: email }}
          component={HomeScreen}
          options={{
            tabBarLabel: "Trang ch???",
            //   tabBarIcon: { focus: true, colors: "red" },
            //   tabBarColor: "red",
            //   tabBarIcon: ({ color }) => (
            //     <Ionicons name="home" size={6} color={color} />
            //   ),
          }}
        />
        <Tab.Screen
          name="BookNavigation"
          initialParams={{ email: email }}
          component={BookNavigation}
          options={{
            tabBarLabel: "S??ch",
            // tabBarIcon: ({ color }) => (
            //   <Ionicons name="book" size={26} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name="UserScreen"
          initialParams={{ email: email }}
          component={UserNavigation}
          options={{
            tabBarLabel: "C??i ?????t",
            // tabBarIcon: ({ color }) => (
            //   <Ionicons name="setting" size={26} color={color} />
            // ),
          }}
        />
      </Tab.Navigator>
    </UserContext.Provider>
  );
}
