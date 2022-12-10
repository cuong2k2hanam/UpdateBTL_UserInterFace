import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./navigation/RootNavigator";

// import { AppContext } from "./context/AppProvider";

export default function AppContainer() {
  // const context = useContext(AppContext);
  // console.log("AppContainer");
  // console.log(context);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
