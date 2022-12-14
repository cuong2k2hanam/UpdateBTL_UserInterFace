import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import { theme } from "../../../theme";

import { UserContext } from "../../../navigation/HomeNavigation";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { addANewComment, getComments } from "../../../firebase/CommentControl";

export default function CommentBar({ style, book, setComments }) {
  const context = useContext(UserContext);
  const { user, email } = context;
  const [text, setText] = useState("");
  let myImage = {
    uri: user.avatar,
  };
  return (
    <View style={[styles.container, style]}>
      <Image source={myImage} style={styles.avatar} />
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => {
          addANewComment(text, book, email, user);
          getComments(setComments, book);
          setText("");
        }}
      >
        <MaterialCommunityIcons
          name="send-circle-outline"
          size={48}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
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
    marginHorizontal: 10,
    flex: 5,
  },
  sendButton: {
    flex: 1,
  },
});
