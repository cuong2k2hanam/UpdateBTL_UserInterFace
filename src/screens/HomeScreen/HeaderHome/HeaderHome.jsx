import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { user } from "../../../data";

export default function HeaderHome({ image, style }) {
  return (
    <ImageBackground source={image} style={[style, styles.constainer]}>
      <View style={styles.head}>
        <View style={styles.title}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#FDFAFA",
            }}
          >
            Tủ sách nói
          </Text>
        </View>
        <View style={styles.avatar}>
          <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  constainer: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    borderWidth: 2,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    width: "50%",
    borderWidth: 2,
    backgroundColor: "rgba(217,217,217, 0.54)",
    borderRadius: 15,
    padding: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
