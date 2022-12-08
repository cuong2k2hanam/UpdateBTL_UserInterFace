import { StatusBar, StyleSheet, SafeAreaView, View, Text } from "react-native";
import AppProvider from "./src/context/AppProvider";
import { theme } from "./src/theme.js";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import VerificationScreen from "./src/screens/VerificationScreen/VerificationScreen";
// import HomeScreen from "../screens/HomeScreen/HomeScreen";
// import HomeNavigation from "./HomeNavigation";

const Stack = createStackNavigator();

import AppContainer from "./src/AppContainer.jsx";

export default function App() {
  return (
    <AppProvider>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.colors.primary}
      />
      <AppContainer />
      {/* </SafeAreaView> */}
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
