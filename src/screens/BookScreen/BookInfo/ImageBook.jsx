import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ImageBook({ image, style }) {
  return (
    <View style={[styles.imageBookContainer, style]}>
      {console.log(image)}
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
  },
});
