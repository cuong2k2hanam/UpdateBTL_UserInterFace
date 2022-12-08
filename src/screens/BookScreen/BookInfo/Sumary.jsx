import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Sumary({ style, author }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={{ color: "#707070", fontSize: 16 }}>{author}</Text>
      <View>
        <Text style={{ color: "#707070" }}>Sumary</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
