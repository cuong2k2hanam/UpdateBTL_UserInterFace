import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDrawerStatus } from "@react-navigation/drawer";

import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS } from "../../../../constants";
import { authors } from "../../../book";

import AuthorItem from "./components/AuthorItem";

export default function AuthorList({ navigation }) {
  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {authors.map((author, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("AuthorScreen", { author: author });
              }}
            >
              <AuthorItem author={author} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.togleDrawer}
        onPress={() => navigation.openDrawer()}
      >
        {useDrawerStatus() === "closed" && (
          <FontAwesome5 name="bars" size={24} color={COLORS.white} />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // borderWidth: 2,
    padding: 10,
    marginTop: 10,
  },
  togleDrawer: {
    position: "absolute",
    right: 15,
    top: 5,
  },
});
