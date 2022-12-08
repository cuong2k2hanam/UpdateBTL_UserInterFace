import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { COLORS } from "../../../../constants";

export default function TextField({ style, name, content }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>{name}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    width: "100%",
    marginBottom: 20,
  },
  content: {
    fontWeight: "bold",
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
