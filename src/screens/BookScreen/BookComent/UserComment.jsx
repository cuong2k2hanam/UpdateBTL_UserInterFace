import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../../theme";

export default function UserComment({ style, commnent }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.userComment}>
        <Text style={styles.comment}>{commnent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  userComment: {
    width: "80%",
  },
  comment: {
    // backgroundColor:
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: theme.colors.fourthPrimary,
    textAlign: "right",
  },
});
