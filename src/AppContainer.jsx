import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./navigation/RootNavigator";

export default function AppContainer() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
