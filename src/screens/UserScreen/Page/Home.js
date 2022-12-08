import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  Pressable,
} from "react-native";
import { Avatar, Button, Icon, LinearProgress } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import ViewBook from "./ViewBook";

export default function Home() {
  const [isFollow, setIsFollow] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#4559BD", "transparent"]}>
        <View style={[styles.rowDirection, styles.profile]}>
          <Avatar
            size={132}
            rounded
            source={{
              uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
            }}
          />
          <View style={styles.storyAuthor}>
            <Text style={styles.h1}>Name_Author</Text>
            <Text>Story Author</Text>
          </View>
        </View>

        <View style={[styles.center, styles.p12]}>
          {/* <TouchableHighlight style={styles.follow} onPress={() => { }}> */}
          <Pressable
            title="Press me"
            style={[styles.rowDirection, styles.follow]}
            onClick={() => setIsFollow(!isFollow)}
          >
            {isFollow ? (
              <Icon name="heart" type="font-awesome" color="#f50" />
            ) : (
              <Icon name="heart-o" type="font-awesome" color="#f50" />
            )}

            <Text style={[styles.h1, styles.m12]}>Theo dõi</Text>
          </Pressable>
          {/* </TouchableHighlight> */}
        </View>

        <View style={styles.containerBook}>
          <Text style={styles.containerTitle}>Những tựa sách của tác giả</Text>
          <ViewBook />
        </View>
      </LinearGradient>
    </ScrollView>
    // </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    height: "100%",
    borderWidth: 2,
    // backgroundColor: "red",
  },
  h1: {
    fontWeight: "700",
    fontSize: 18,
  },
  h2: {
    fontWeight: "700",
    fontSize: 16,
  },
  profile: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  storyAuthor: {
    paddingHorizontal: 20,
  },
  authorName: {
    fontWeight: "700",
    fontSize: 18,
  },
  logo: {
    height: 128,
    width: 128,
    resizeMode: "center",
    borderRadius: 100,
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: "yellow",
  },
  rowDirection: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  follow: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E1EDFF",
    borderRadius: 20,
  },
  containerBook: {
    padding: 24,
    flex: 1,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    backgroundColor: "#E1EDFF",
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  p12: {
    paddingVertical: 12,
  },
  m12: {
    marginHorizontal: 12,
  },
});
