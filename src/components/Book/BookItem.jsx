import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { book } from "../../data";

export default function BookItem({ navigation, image, nameBook, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.imageBook}
      />
      <Text>{nameBook}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageBook: {
    width: 80,
    height: 80,
  },
});
