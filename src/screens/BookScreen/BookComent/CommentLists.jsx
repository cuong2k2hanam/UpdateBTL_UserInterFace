import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";

import { user, comments } from "../../../data";

import GuestComment from "./GuestComment";
import UserComment from "./UserComment";

import { UserContext } from "../../../navigation/HomeNavigation";

export default function CommentLists({ style, book, comments }) {
  const context = useContext(UserContext);
  const { user, email } = context;
  const [listComment, setListComment] = useState(comments);

  useEffect(() => {
    setListComment(comments);
  }, [comments]);

  return (
    <ScrollView style={[styles.container, style]}>
      {console.log(comments.length)}
      {listComment.map((comment, index) => {
        return comment.email === email ? (
          <UserComment key={index} commnent={comment.content} />
        ) : (
          <GuestComment
            key={index}
            image={{ uri: comment.avatar }}
            name={comment.userName}
            comment={comment.content}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
});
