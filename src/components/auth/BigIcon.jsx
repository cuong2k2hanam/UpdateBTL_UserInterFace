import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

export default function BigIcon({ icon, size, color }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FontAwesome name={icon} size={size} color={color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 10,
  },
  imageContainer: {
    marginTop: 5,
    alignItems: "center",
    marginHorizontal: 80,
    marginBottom: 10,
  },
});
