import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../../../components/common/Header";
// import SetAvatar from "./SetAvatar";
import SetContent from "./SetContent";

import { COLORS } from "../../../../constants";
import { user } from "../../../data";

const SetUserInfo = ({ route, navigation, style }) => {
  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      {/* Header */}
      <Header
        title={"Chỉnh sửa thông tin"}
        navigation={navigation}
        style={styles.header}
      />
      {/* Content */}
      <ScrollView style={styles.setContent}>
        <SetContent user={user} style={{ flex: 1 }} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // marginBottom: ,
  },
  setContent: {
    flex: 1,
    // justifyContent: "flex-end",
    // borderWidth: 10,
  },
});

export default SetUserInfo;
