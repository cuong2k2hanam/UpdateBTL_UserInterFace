import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { theme } from "../../../theme";

export default function CommentBar({ image, style }) {
  const [text, setText] = useState("");
  let myImage = {
    uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/user-avatar.jpg",
  };
  return (
    <View style={[styles.container, style]}>
      <Image source={myImage} style={styles.avatar} />
      <TextInput style={styles.input} onChangeText={setText} value={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingHorizontal: "5%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.fourthPrimary,
    width: "85%",
    borderRadius: 100,
    paddingHorizontal: 20,
  },
});
