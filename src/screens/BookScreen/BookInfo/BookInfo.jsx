import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";

import { theme } from "../../../theme";
import { COLORS } from "../../../../constants";

import { AppContext } from "../../../context/AppProvider";

import Header from "../../../components/common/Header";
import ImageBook from "./ImageBook";
import ContentBook from "./ContentBook";
import ChatBubble from "./ChatBubble";

export default function BookInfo({ route, navigation }) {
  const context = useContext(AppContext);
  const { setBookName, setPlaying, playbackObj } = context;
  console.log("BookInfo");
  console.log("playbackObj " + playbackObj._loaded);
  console.log(context);

  let { mybook } = route.params;
  console.log(mybook);

  async function resetMyBook(bookName) {
    if (context.bookName !== mybook.bookName) {
      console.log("reset Book");
      console.log(setBookName);
      // console.log(context.setNewBookName);
      setBookName(mybook.bookName);
      // await context.setNewBookName(bookName);
      setPlaying(false);
    }
    if (playbackObj._loaded) {
      await playbackObj.stopAsync();
      await playbackObj.unloadAsync();
    }
  }

  useEffect(() => {
    resetMyBook(mybook.bookName);
  }, [mybook.bookName]);

  return (
    <View style={styles.container}>
      <Header
        title={"Thông tin sách"}
        style={styles.header}
        navigation={navigation}
      />
      <ImageBook
        image={mybook.bookCover.uri}
        style={styles.imageBook}
        book={mybook}
      />
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
    backgroundColor: COLORS.transparent,
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
