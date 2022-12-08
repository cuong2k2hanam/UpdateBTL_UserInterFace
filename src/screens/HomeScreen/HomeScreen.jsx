import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";
import React from "react";

import HeaderHome from "./HeaderHome/HeaderHome";
import BookItem from "../../components/Book/BookItem";
import Home from "../Bach/Home";

import { books } from "../../book";
import { book } from "../../data";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export default function HomeScreen({ navigation }) {
  // let image = {
  //   uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/header-home.jpg",
  // };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return console.log("Không load được");
  } else {
    console.log("Ok rồi nhé");
  }

  return (
    // <View style={styles.container}>
    //   <HeaderHome image={image} style={styles.headerHome} />
    //   <View style={styles.bodyHome}>
    //     <Text>HomeScreen</Text>
    //     <ScrollView>
    //       {books.map((book, index) => {
    //         return (
    //           <BookItem
    //             key={index}
    //             navigation={navigation}
    //             image={book.bookImg}
    //             nameBook={book.bookName}
    //             onPress={
    //              () =>
    //                 navigation.navigate("BookNavigation", {
    //                   screen: "BookInfo",
    //                   mybook: book,
    //                 } )
    //               // navigation.navigate("BookInfo", { mybook: book })
    //               // navigation.navigate("BookNavigation", { mybook: book })
    //             }
    //           />
    //         );
    //       })}
    //     </ScrollView>
    //   </View>
    // </View>
    <Home navigation={navigation} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 2,
  },
  headerHome: {
    // height: "20%",
    // flexBasis: 1,
    flex: 1,
  },
  bodyHome: {
    // height: "80%",
    // flexBasis: 5,
    flex: 9,
    borderWidth: 2,
    borderColor: "red",
  },
});
