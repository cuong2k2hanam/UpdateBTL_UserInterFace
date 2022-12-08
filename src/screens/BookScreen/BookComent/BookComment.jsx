import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../../components/common/Header";
import { theme } from "../../../theme";
import CommentContent from "./CommentContent";

const BookComment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title={"Trò chuyện"}
        style={styles.header}
        navigation={navigation}
      />
      <CommentContent style={styles.commentContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // borderWidth: 2,
    flexDirection: "column",
  },
  header: {
    backgroundColor: theme.colors.primary,
  },
  commentContent: {
    flex: 1,
    // borderWidth: 2,
  },
});

export default BookComment;
