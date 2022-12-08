import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { theme } from "../../../theme";

import CommentLists from "./CommentLists";
import CommentBar from "./CommentBar";

export default function CommentContent(style) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.comments}>
        <CommentLists style={styles.commentLists} />
        <CommentBar style={styles.commentBar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondPrimary,
    flex: 1,
    height: "100%",
    // borderWidth: 5,
    position: "relative",
    // flexDirection: "column",
    // justifyContent: "flex-end",
  },
  comments: {
    flex: 1,
    height: "100%",
    // borderColor: "red",
    // borderWidth: 2,
  },
  commentLists: {
    flex: 9,
    // borderWidth: 2,
    // borderColor: "red",
  },
  commentBar: {
    // flex: 1,
    // borderWidth: 2,
    // position: "absolute",
    // bottom: 0,
    // left
  },
});
