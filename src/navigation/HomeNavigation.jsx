import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BookScreen from "../screens/BookScreen/BookScreen";
import BookNavigation from "./BookNavigation";
import UserScreen from "../screens/UserScreen/UserScreen";
import UserNavigation from "./UserNavigation";

import { theme } from "../theme";

const Tab = createMaterialBottomTabNavigator();

export default function HomeNavigation() {
  return (
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
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          //   tabBarIcon: { focus: true, colors: "red" },
          //   tabBarColor: "red",
          //   tabBarIcon: ({ color }) => (
          //     <Ionicons name="home" size={6} color={color} />
          //   ),
        }}
      />
      <Tab.Screen
        name="BookNavigation"
        component={BookNavigation}
        options={{
          tabBarLabel: "Sách",
          // tabBarIcon: ({ color }) => (
          //   <Ionicons name="book" size={26} color={color} />
          // ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserNavigation}
        options={{
          tabBarLabel: "Cài đặt",
          // tabBarIcon: ({ color }) => (
          //   <Ionicons name="setting" size={26} color={color} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
