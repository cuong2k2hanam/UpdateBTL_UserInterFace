import { View, Text, StyleSheet } from "react-native";
import React from "react";

import TextField from "./TextField";

export default function UserInfomation({ user, style }) {
  // const user = {
  //   id: 0,
  //   avatar:
  //     "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/user-avatar.jpg",
  //   firsName: "Trần Đình",
  //   lastName: "Cường",
  //   phone: "0862964913",
  //   email: "cuong@gmail.com",
  //   pass: "123456789",
  // };
  return (
    <View style={[styles.container, style]}>
      <TextField name={"Tên"} content={user.firstName + " " + user.lastName} />
      <TextField name={"Số điện thoại"} content={user.phone} />
      <TextField name={"Email"} content={user.email} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
});
