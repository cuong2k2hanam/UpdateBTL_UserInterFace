import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../../components/common/Header";
import BookAudio from "./BookAudio/BookAudio";

import { theme } from "../../../theme";

export default function BookListen({ route, navigation }) {
  const { mybook } = route.params;
  const [playAudio, setPlayAudio] = useState(true);
  // console.log(mybook);
  useEffect(() => {
    console.log("Play Audio: " + playAudio);
  }, [playAudio]);
  return (
    <View style={styles.container}>
      <Header
        title={"Audio"}
        style={styles.header}
        navigation={navigation}
        setPlayAudio={setPlayAudio}
      />
      <BookAudio
        style={styles.bookAudio}
        mybook={mybook}
        playAudio={playAudio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.primary,
  },
});
