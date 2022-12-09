import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Avatar, Button, Icon, LinearProgress } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useDrawerStatus } from "@react-navigation/drawer";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import ViewBook from "./components/ViewBook";

import { books, category } from "../../../book";
import { COLORS } from "../../../../constants";

export default function AuthorScreen({ route, navigation }) {
  const [isFollow, setIsFollow] = useState(false);
  const [listBook, setListBook] = useState([]);

  const { author } = route.params;

  useEffect(() => {
    const newListBook = books.map((book, index) => {
      return {
        id: book.bookId,
        categoryId: book.categoryId,
        bookName: book.bookName,
        bookUri: book.bookUri,
        bookAudio: book.audio,
        bookCover: { uri: book.bookImg },
        rating: 4.5,
        language: "Vn",
        pageNo: 341,
        author: book.bookAuthor,
        genre: [category[book.categoryId].name],
        readed: "12k",
        description:
          "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#FFF",
        completion: "75%",
        lastRead: "3d 5h",
      };
    });

    setListBook([...newListBook]);
  }, []);

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <LinearGradient colors={["#4559BD", "transparent"]}>
        <View style={[styles.rowDirection, styles.profile]}>
          <Image
            style={{
              // flex: 1,
              width: 120,
              height: 120,
              borderRadius: 100,
              alignSelf: "center",
            }}
            source={{
              uri: author.avatar,
            }}
          />
          <View style={styles.storyAuthor}>
            <Text style={[styles.h1, { fontFamily: "Roboto_700Bold" }]}>
              {author.name}
            </Text>
            <View
              style={{
                height: 150,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderTopEndRadius: 200,
                borderBottomStartRadius: 200,
              }}
            >
              <ScrollView nestedScrollEnabled={true}>
                <Text
                  style={{
                    textAlign: "justify",
                    fontFamily: "Roboto_400Regular",
                    fontSize: 16,
                  }}
                >
                  {author.story}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={[styles.center, styles.p12]}>
          {/* <TouchableHighlight style={styles.follow} onPress={() => { }}> */}
          <Pressable
            title="Press me"
            style={[styles.rowDirection, styles.follow]}
            onClick={() => setIsFollow(!isFollow)}
          >
            {isFollow ? (
              <Icon name="heart" type="font-awesome" color="#f50" />
            ) : (
              <Icon name="heart-o" type="font-awesome" color="#f50" />
            )}

            <Text style={[styles.h1, styles.m12]}>Theo dõi</Text>
          </Pressable>
          {/* </TouchableHighlight> */}
        </View>

        <View style={styles.containerBook}>
          <Text style={styles.containerTitle}>Những tựa sách của tác giả</Text>
          <ViewBook listBook={listBook} />
        </View>

        <TouchableOpacity
          style={styles.togleDrawer}
          onPress={() => navigation.openDrawer()}
        >
          {useDrawerStatus() === "closed" && (
            <FontAwesome5 name="bars" size={24} color={COLORS.white} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
    // </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    height: "100%",
    // borderWidth: 2,
    // backgroundColor: "red",
  },
  h1: {
    fontWeight: "700",
    fontSize: 18,
  },
  h2: {
    fontWeight: "700",
    fontSize: 16,
  },
  profile: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  storyAuthor: {
    flex: 2,
    marginHorizontal: 10,
    // borderWidth: 2,
  },
  authorName: {
    fontWeight: "700",
    fontSize: 18,
  },
  logo: {
    height: 128,
    width: 128,
    resizeMode: "center",
    borderRadius: 100,
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: "yellow",
  },
  rowDirection: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  follow: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E1EDFF",
    borderRadius: 20,
  },
  containerBook: {
    padding: 24,
    flex: 1,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    backgroundColor: "rgba(255,255,255,0.4)",
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  p12: {
    paddingVertical: 12,
  },
  m12: {
    marginHorizontal: 12,
  },
  togleDrawer: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  backButton: {
    position: "absolute",
    left: 15,
    top: 5,
  },
});
