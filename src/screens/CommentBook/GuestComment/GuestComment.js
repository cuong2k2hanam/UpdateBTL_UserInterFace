import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./style";
// avatar = "", name = "", message = ""
export default function GuestComment(props) {
  return (
    <>
      <View style={styles.comment_child}>
        <View style={styles.user_title}>
          <View style={styles.avatar}>
            <Image
              // source={require("../../../images/avatar.webp")}
              source={props.avatar}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.user_comment} multiline={true}>
          {props.message}
        </Text>
      </View>
    </>
  );
}
