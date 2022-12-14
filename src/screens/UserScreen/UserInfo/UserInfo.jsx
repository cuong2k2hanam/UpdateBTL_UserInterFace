import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDrawerStatus } from "@react-navigation/drawer";

import { getUserInfo, readUserInfo } from "../../../firebase/UserInfo";

import { FontAwesome5 } from "@expo/vector-icons";

// import Header from "../../../components/common/Header";
import UserInfoContend from "./UserInfoContend";

import { COLORS } from "../../../../constants";
import { user as userDefault } from "../../../data";

const UserInfo = ({ route, navigation }) => {
  // const [user, setUser] = useState(userDefault);
  const { email, user } = route.params;
  // console.log("UserInfo: " + email);

  // useEffect(() => {
  //   readUserInfo(email);
  //   getUserInfo(email, setUser);
  // }, []);
  // console.log("User: " + user);

  // setUser(user);
  console.log(useDrawerStatus());
  return (
    <LinearGradient
      colors={COLORS.linerGradientPrimary}
      style={styles.container}
    >
      {/* <Header title={"Thông tin người dùng"} navigation={navigation} /> */}
      <UserInfoContend style={styles.userInfoContend} user={user} />
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
  },
  userInfoContend: {
    flex: 1,
  },
  togleDrawer: {
    position: "absolute",
    right: 15,
    top: 5,
  },
});

export default UserInfo;
