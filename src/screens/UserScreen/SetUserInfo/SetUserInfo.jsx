import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDrawerStatus } from "@react-navigation/drawer";

import { FontAwesome5 } from "@expo/vector-icons";

import { UserContext } from "../../../navigation/HomeNavigation";
// import Header from "../../../components/common/Header";
// import SetAvatar from "./SetAvatar";
import SetContent from "./SetContent";

import { COLORS } from "../../../../constants";
// import { user } from "../../../data";

const SetUserInfo = ({ route, navigation, style }) => {
  const context = useContext(UserContext);
  const { user } = context;
  const { email } = route.params;

  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      {/* Header */}
      {/* Content */}
      <ScrollView style={styles.setContent}>
        <SetContent user={user} style={{ flex: 1, height: "100%" }} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
  },
  header: {
    // marginBottom: ,
  },
  setContent: {
    flex: 1,
    // borderWidth: 2,
    // backgroundColor: "red",
    // justifyContent: "flex-end",
    // borderWidth: 10,
  },
  togleDrawer: {
    position: "absolute",
    right: 15,
    top: 5,
  },
});

export default SetUserInfo;
