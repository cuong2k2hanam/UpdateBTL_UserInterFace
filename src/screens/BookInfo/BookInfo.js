import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { styleBookInfo as styles } from "./style.js";

export default function BookInfo() {
  const [favBook, setFavBook] = useState(false);
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
      <KeyboardAvoidingView>
        <StatusBar barStyle="default" />
        {/* Header */}
        {/* header_commenting */}
        <View style={commenting ? [styles.header_commenting] : [styles.header]}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.header_title}>Thông tin sách</Text>
        </View>
        {/* Body */}
        <View style={commenting ? [styles.body_commenting] : [styles.body]}>
          <View
            style={
              commenting ? [styles.body_head_commenting] : [styles.body_head]
            }
          >
            <Image
              source={require("../../images/fortress-blood.jpg")}
              style={styles.body_image}
            />
          </View>
          {/* Body content */}
          <View
            style={
              commenting
                ? [styles.bodyContent_commeting, { borderWidth: 2 }]
                : [styles.bodyContent]
            }
          >
            <View style={[styles.bodyContent_head]}>
              <Text style={[styles.bodyContent_title]}>Fortress of Blood</Text>
              <AntDesign
                name="heart"
                size={24}
                color={favBook ? "rgb(244, 29, 29)" : "black"}
                onPress={() => setFavBook(!favBook)}
              />
            </View>
            <View style={styles.sumaryBook}>
              <Text style={styles.athor}>L.D. GOFFIGAN</Text>
              <View>
                <Text style={styles.sumaryStory}>Nội dung truyện...</Text>
                <Text style={styles.sumaryStory}>Nội dung truyện...</Text>
                <Text style={styles.sumaryStory}>Nội dung truyện...</Text>
                <Text style={styles.sumaryStory}>Nội dung truyện...</Text>
              </View>
            </View>
            <View style={styles.starRate}>
              <FontAwesome name="star" size={18} color="rgb(234, 218, 46)" />
              <FontAwesome name="star" size={18} color="rgb(234, 218, 46)" />
              <FontAwesome name="star" size={18} color="rgb(234, 218, 46)" />
              <FontAwesome name="star" size={18} color="rgb(234, 218, 46)" />
              <FontAwesome name="star" size={18} color="rgb(234, 218, 46)" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonRead}>
                <Text style={styles.buttonRead_title}>Đọc sách</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonListen}>
                <Text style={styles.buttonListen_title}>Nghe sách</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Comment */}
        {/* comment_commenting */}
        <View
          style={commenting ? [styles.comment_commenting] : [styles.comment]}
        >
          <View style={styles.comment_title}>
            <Text style={{ fontWeight: "bold" }}>Bình luận</Text>
            <TouchableOpacity>
              <Entypo name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.commentContent}>
            <View style={styles.avatar}>
              <Image
                source={require("../../images/avatar.webp")}
                style={styles.avatarImage}
              />
            </View>
            <TextInput
              style={styles.comment_input}
              onChangeText={onChangeMessage}
              // onFocus={(e) => setCommenting(true)}
              // onBlur={(e) => setCommenting(false)}
              value={message}
              placeholder="Trò chuyện"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
