import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../theme";

import BookInfo from "./BookInfo/BookInfo";
import BookComment from "./BookComent/BookComment";

export default function BookScreen() {
  return (
    <View style={styles.container}>
      <BookComment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});
