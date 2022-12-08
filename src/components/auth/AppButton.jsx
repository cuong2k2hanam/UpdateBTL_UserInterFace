import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { theme } from "../../theme";

export default function AppButton({ title, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
