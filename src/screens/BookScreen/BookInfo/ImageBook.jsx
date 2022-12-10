import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { COLORS } from "../../../../constants";

export default function ImageBook({ image, style, book }) {
  return (
    <View style={[styles.imageBookContainer, style]}>
      {console.log(image)}
      <ImageBackground
        source={book.bookCover}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />

      {/* Color Overlay */}
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: book.backgroundColor,
        }}
      ></View>
      <Image
        source={{
          uri: image,
        }}
        // source={require("../../../images/fortress-blood.jpg")}
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBookContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    tintColor: COLORS.darkBlue,
  },
});
