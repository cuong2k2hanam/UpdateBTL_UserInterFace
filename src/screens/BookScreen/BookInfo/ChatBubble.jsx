import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Octicons } from "@expo/vector-icons";
import { theme } from "../../../theme";

export default function ChatBubble({ style, navigation, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Octicons name="comment-discussion" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
