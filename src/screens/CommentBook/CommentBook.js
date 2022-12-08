import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { Entypo } from "@expo/vector-icons";

import UserComment from "./UserComment/UserComment";
import GuestComment from "./GuestComment/GuestComment";

export default function CommentBook() {
  const [message, onChangeMessage] = useState("");
  const [commenting, setCommenting] = useState(false);

  function handleCommentInput(e) {
    // setCommenting(true);
    if (e.target.isFocused()) {
      console.log("Comment");
      console.log(e.keyCode);
    }
    if (e.key === "Enter") {
      console.log("enter press here! ");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      {/* Comment */}
      <View style={[styles.comment]}>
        <View style={styles.comment_title}>
          <TouchableOpacity>
            <Entypo name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.tiltePage}>Bình luận</Text>
        </View>
        <UserComment />
      </View>

      {/* Danh sách comment */}
      <ScrollView style={styles.list_comment}>
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Bach"
          message="Xin chao nhe"
        />
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Cuong"
          message=" Hello Cường kmdsklcmdksc cdskjlncdks Hello Cường"
        />
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Cuong"
          message=" Hello Cường kmdsklcmdksc cdskjlncdks Hello Cường"
        />
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Cuong"
          message=" Hello Cường kmdsklcmdksc cdskjlncdks Hello Cường"
        />
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Cuong"
          message=" Hello Cường kmdsklcmdksc cdskjlncdks Hello Cường"
        />
        <GuestComment
          avatar={require("../../images/avatar.webp")}
          name="Mr.Cuong"
          message=" Hello Cường kmdsklcmdksc cdskjlncdks Hello Cường"
        />
      </ScrollView>
      {/* <GuestComment /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tiltePage: {
    fontWeight: "bold",
    width: "90%",
    textAlign: "center",
    fontSize: 17,
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // borderWidth: 2,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(225, 237, 255)",
  },
  comment: {
    padding: "2%",
    height: "15%",
    backgroundColor: "rgb(225, 237, 255)",
    // borderWidth: 2,
  },
  comment_title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  list_comment: {
    marginTop: "5%",
    width: "100%",
    padding: "2%",
    paddingLeft: "25%",
    paddingRight: "5%",
    // borderWidth: 2,
    // backgroundColor: "pink",
    marginHorizontal: "5%",
  },
});
