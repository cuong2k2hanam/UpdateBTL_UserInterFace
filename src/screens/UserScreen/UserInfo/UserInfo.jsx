import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../../../components/common/Header";
import UserInfoContend from "./UserInfoContend";

import { COLORS } from "../../../../constants";
import { user } from "../../../data";

const UserInfo = ({ route, navigation }) => {
  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      <Header title={"Thông tin người dùng"} navigation={navigation} />
      <UserInfoContend style={styles.userInfoContend} user={user} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoContend: {
    flex: 1,
  },
});

export default UserInfo;
