import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../../theme";

import Header from "../../../components/common/Header";
import ImageBook from "./ImageBook";
import ContentBook from "./ContentBook";
import ChatBubble from "./ChatBubble";

export default function BookInfo({ route, navigation }) {
  let imageBook = {
    uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/fortress-blood.jpg",
  };

  let { mybook } = route.params;
  console.log(mybook);

  return (
    <View style={styles.container}>
      <Header
        title={"Thông tin sách"}
        style={styles.header}
        navigation={navigation}
      />
      <ImageBook image={mybook.bookCover.uri} style={styles.imageBook} />
      <ContentBook
        style={styles.containBook}
        mybook={mybook}
        navigation={navigation}
      />
      <ChatBubble
        style={styles.chatBubble}
        navigation={navigation}
        onPress={() => navigation.navigate("BookComment")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    height: "100%",
    backgroundColor: theme.colors.primary,
  },
  header: {
    // borderWidth: 2,
    backgroundColor: theme.colors.primary,
  },
  imageBook: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  containBook: {
    flex: 1.5,
    backgroundColor: theme.colors.secondPrimary,
  },
  chatBubble: {
    position: "absolute",
    right: 15,
    bottom: "12%",
    elevation: 5,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});
