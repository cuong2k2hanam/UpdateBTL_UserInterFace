import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

// import Home from "./Page/Home";
// import Home from "./Page/HomeTest";
// import Popup from "./Page/Modal";
// import Report from "./Page/Report";
// import Report from "./Page/SuggestFeature";
import { theme } from "../../theme";

import Home from "../Bach/Home";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});
