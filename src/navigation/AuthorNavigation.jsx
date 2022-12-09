import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthorList from "../screens/UserScreen/Author/AuthorList";
import AuthorScreen from "../screens/UserScreen/Author/AuthorScreen";

const Stack = createStackNavigator();

export default function AuthorNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="AuthorList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthorList" component={AuthorList} />
      <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
    </Stack.Navigator>
  );
}
