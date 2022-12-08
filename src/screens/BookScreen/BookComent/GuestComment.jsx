import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { theme } from "../../../theme";

export default function GuestComment({ image, name, comment, style }) {
  let myImage = {
    uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/avatar.webp",
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.guestComment}>
        <View style={styles.header}>
          <Image source={image} style={styles.avatar} />
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
        </View>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  guestComment: {
    width: "80%",
    // marginLeft: "5%",
    // borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    padding: 5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  comment: {
    // borderWidth: 2,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: theme.colors.thirdPrimary,
  },
});
