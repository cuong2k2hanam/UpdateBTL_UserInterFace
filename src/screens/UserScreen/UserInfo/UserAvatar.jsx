import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function UserAvatar({ image, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: image }} style={styles.avatar} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
