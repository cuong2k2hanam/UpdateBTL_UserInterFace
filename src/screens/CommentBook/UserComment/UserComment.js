import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";

import styles from "./style";

export default function UserComment(props) {
  const [message, onChangeMessage] = useState("");

  function handleCommentInput(e) {
    if (e.target.isFocused()) {
      console.log("Comment");
      console.log(e.keyCode);
    }
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  }

  return (
    <View style={styles.commentContent}>
      <View style={styles.avatar}>
        <Image
          source={require("../../../images/avatar.webp")}
          // source={props.avatar}
          style={styles.avatarImage}
        />
      </View>
      <TextInput
        style={styles.comment_input}
        onChangeText={onChangeMessage}
        onFocus={(e) => e.preventDefault()}
        // onBlur={(e) => setCommenting(false)}
        value={message}
        placeholder="Trò chuyện"
      />
    </View>
  );
}
