import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { inputStyles } from "../../styles";

import { theme } from "../../theme";

export default function AppTextInput({ icon, placeholder, ...ortherProps }) {
  return (
    <View style={inputStyles.mainContianer}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={30} color={theme.colors.primary} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...ortherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    flex: 1,
    fontWeight: "500",
    color: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
    flex: 2.8,
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    fontSize: 15,
    paddingLeft: 10,
  },
});
