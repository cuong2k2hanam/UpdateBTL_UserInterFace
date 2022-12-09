import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements";
import { styleCommon } from "../styles/common";
const BASE_URI = "https://source.unsplash.com/random?sig=";

import { books } from "../../../../book";

const ImageAPI = ({ listBook }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {listBook.map((book, index) => {
        if (index < 12) {
          return (
            <TouchableOpacity
              style={styles.bookItem}
              onPress={() => {
                navigation.navigate("BookNavigation", {
                  screen: "BookInfo",
                  mybook: book,
                });
              }}
            >
              <Image
                source={book.bookCover}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableOpacity>
          );
        }
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    aspectRatio: 0.7,
    width: "100%",
    flex: 1,
  },
  bookItem: {
    paddingTop: 15,
    width: "30%",
    alignItems: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default ImageAPI;
