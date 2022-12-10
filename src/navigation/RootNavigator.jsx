import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import VerificationScreen from "../screens/VerificationScreen/VerificationScreen";
// import HomeScreen from "../screens/HomeScreen/HomeScreen";
import HomeNavigation from "./HomeNavigation";

// import { AppContext } from "../context/AppProvider";

const Stack = createStackNavigator();

export default function RootNavigator() {
  // const context = useContext(AppContext);
  // console.log("RootNavigation");
  // console.log(context);
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigation} />
    </Stack.Navigator>
  );
}
