import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import { user, comments } from "../../../data";

import GuestComment from "./GuestComment";
import UserComment from "./UserComment";

export default function CommentLists({ style }) {
  const [listComment, setListComment] = useState(comments);

  return (
    <ScrollView style={[styles.container, style]}>
      {console.log(comments.length)}
      {listComment.map((comment, index) => {
        return comment.userId === user.id ? (
          <UserComment key={index} commnent={comment.userCommnent} />
        ) : (
          <GuestComment
            key={index}
            image={{ uri: comment.userAvatar }}
            name={comment.useName}
            comment={comment.userCommnent}
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
