import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";

import UserAvatar from "./UserAvatar";
import UserInfomation from "./UserInfomation";

import { COLORS } from "../../../../constants";
import { UserContext } from "../../../navigation/HomeNavigation";

export default function UserInfoContend({ style }) {
  const context = useContext(UserContext);
  const { user } = context;
  return (
    <View style={[styles.container, style]}>
      <UserAvatar style={styles.userAvatar} image={user.avatar} />
      <UserInfomation style={styles.userInfomation} user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
  },
  userAvatar: {
    flex: 1,
  },
  userInfomation: {
    flex: 1.5,
    backgroundColor: COLORS.secondPrimary,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
});
