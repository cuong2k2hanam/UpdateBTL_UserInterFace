import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TurboModuleRegistry,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants";
// import { Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function AuthorItem({ style, author }) {
  const [favBook, setFavBook] = useState(TurboModuleRegistry);
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{
          uri: author.avatar,
        }}
        resizeMode="cover"
        style={styles.avatar}
      />
      <View style={styles.detail}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "Roboto_700Bold",
            marginLeft: -25,
            marginBottom: 10,
          }}
        >
          {author.name}
        </Text>

        <TouchableOpacity style={styles.folowButton}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontFamily: "Roboto_400Regular",
              marginRight: 8,
            }}
          >
            Đang theo dõi
          </Text>
          <AntDesign
            name={favBook ? "heart" : "hearto"}
            size={24}
            color={favBook ? "rgb(244, 29, 29)" : "black"}
            onPress={() => setFavBook(!favBook)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    // borderWidth: 2,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255,255,255,0.2)",
    // borderRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  detail: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 5,
    // width: "100%",
  },
  folowButton: {
    width: "100%",
    maxWidth: 200,
    flexDirection: "row",
    backgroundColor: COLORS.linerGradientPrimary[0],
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
  },
});
