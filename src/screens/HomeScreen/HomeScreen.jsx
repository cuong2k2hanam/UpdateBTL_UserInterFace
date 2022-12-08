import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Home from "../Bach/Home";

import { COLORS } from "../../../constants";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export default function HomeScreen({ navigation }) {
  // let image = {
  //   uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/header-home.jpg",
  // };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return console.log("Không load được");
  } else {
    console.log("Ok rồi nhé");
  }

  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      <Home navigation={navigation} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 2,
  },
  headerHome: {
    // height: "20%",
    // flexBasis: 1,
    flex: 1,
  },
  bodyHome: {
    // height: "80%",
    // flexBasis: 5,
    flex: 9,
    borderWidth: 2,
    borderColor: "red",
  },
});
