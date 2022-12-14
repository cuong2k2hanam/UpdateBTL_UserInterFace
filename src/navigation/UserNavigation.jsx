import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { getUserInfo } from "../firebase/UserInfo";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import CustomDrawer from "./custom/CustomDrawer";

import UserInfo from "../screens/UserScreen/UserInfo/UserInfo";
import SetUserInfo from "../screens/UserScreen/SetUserInfo/SetUserInfo";
import AuthorNavigation from "./AuthorNavigation";
import SuggestFeature from "../screens/UserScreen/Page/SuggestFeature";

import { COLORS, SIZES } from "../../constants";

const Drawer = createDrawerNavigator();

export default function UserNavigation({ route, navigation }) {
  const { email } = route.params;
  console.log("User: " + email);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="AuthorNavigation"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.linerGradientPrimary[0],
          color: COLORS.white,
        },
        drawerActiveBackgroundColor: COLORS.linerGradientPrimary[1],
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto_700Bold",
          fontSize: 14,
        },
      }}
    >
      <Drawer.Screen
        name="UserInfo"
        initialParams={{ email: email }}
        component={UserInfo}
        options={{
          unmountOnBlur: true,
          title: "Thông tin người dùng",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SetUserInfo"
        initialParams={{ email: email }}
        component={SetUserInfo}
        options={{
          unmountOnBlur: true,
          title: "Thiết lập thông tin",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user-edit" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AuthorNavigation"
        component={AuthorNavigation}
        options={{
          unmountOnBlur: true,
          title: "Tác giả yêu thích",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SuggestFeature"
        component={SuggestFeature}
        options={{
          unmountOnBlur: true,
          title: "Đóng góp",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <FontAwesome name={"send-o"} size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
