import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "react-native-elements";
import { styleCommon } from "../styles/common";

import TextAndPin from "./TextAndPin";

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={[styleCommon.h1, styles.title]}>Đề xuất tính năng</Text>
      <Text>Chia sẻ cho chúng tôi những góp ý để hoàn thiện</Text>
      <TextAndPin titleArea="Nội dung góp ý (bắt buộc)" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1EDFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    flex: 1,
    marginTop: 50,
    padding: 30,
    fontFamily: "sans-serif",
  },
  title: {
    marginVertical: 12,
  },
  input: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#ffff",
    borderWidth: 0,
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: "rgba(69, 89, 189, 0.6)",
    marginTop: 45,
  },
  wrapperIcon: {
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});

export default Report;
