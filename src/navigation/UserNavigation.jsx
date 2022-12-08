import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserInfo from "../screens/UserScreen/UserInfo/UserInfo";
import SetUserInfo from "../screens/UserScreen/SetUserInfo/SetUserInfo";

const Drawer = createDrawerNavigator();

export default function UserNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="UserInfo" component={UserInfo} />
      <Drawer.Screen name="SetUserInfo" component={SetUserInfo} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
