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

const Report = () => {
  return (
    <View style={styles.container}>
      <Text>
        Chúng tôi rất tiếc về sự cố bạn đang gặp phải. Vui lòng chia sẻ thêm
        thông tin chi tiết bên dưới{" "}
      </Text>
      <Text style={[styleCommon.h2, styles.title]}>Phân loại sự cố</Text>
      <TextInput style={styles.input} />
      <Text style={[styleCommon.h2, styles.title]}>Mô tả (bắt buộc)</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={[styles.input, { height: 200, textAlignVertical: "top" }]}
          placeholder="useless placeholder"
          multiline={true}
        />
      </KeyboardAvoidingView>
      <Text style={[styleCommon.h2, styles.title]}>
        Đính kèm hình ảnh (tùy chọn)
      </Text>
      <View style={[styles.wrapperIcon]}>
        <Icon name="paperclip" type="font-awesome" color="#000" />
      </View>
      <Pressable style={[styles.button]}>
        <Text>Gửi</Text>
      </Pressable>
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
