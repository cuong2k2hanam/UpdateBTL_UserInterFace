import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { theme } from "../../../theme";
import { AntDesign } from "@expo/vector-icons";

import Sumary from "./Sumary";
import ReadAndListen from "./ReadAndListen";

export default function ContentBook({ style, mybook, navigation }) {
  const [favBook, setFavBook] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {mybook.bookName}
        </Text>
        <AntDesign
          name={favBook ? "heart" : "hearto"}
          size={24}
          color={favBook ? "rgb(244, 29, 29)" : "black"}
          onPress={() => setFavBook(!favBook)}
        />
      </View>
      <Sumary style={styles.sumary} author={mybook.author} />
      <ReadAndListen
        style={styles.readAndListen}
        navigation={navigation}
        mybook={mybook}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 30,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    // borderWidth: 2,
  },
  sumary: {
    flex: 4,
    // borderWidth: 2,
  },
});
