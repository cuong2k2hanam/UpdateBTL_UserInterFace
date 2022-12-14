import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../theme";

import BigIcon from "./BigIcon";

export default function Header({ icon, title }) {
  return (
    <View style={styles.container}>
      <BigIcon icon={icon} size={150} color={theme.colors.white} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: theme.colors.primary,
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
