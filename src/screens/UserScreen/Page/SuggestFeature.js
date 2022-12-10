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
  TouchableOpacity,
} from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";

import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS } from "../../../../constants";
import { Icon } from "react-native-elements";
import { styleCommon } from "../styles/common";
import { theme } from "../../../theme";

import TextAndPin from "./TextAndPin";

const Report = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styleCommon.h1, styles.title]}>Đề xuất tính năng</Text>
      <Text>Chia sẻ cho chúng tôi những góp ý để hoàn thiện</Text>
      <TextAndPin titleArea="Nội dung góp ý (bắt buộc)" />
      <TouchableOpacity
        style={styles.togleDrawer}
        onPress={() => navigation.openDrawer()}
      >
        {useDrawerStatus() === "closed" && (
          <FontAwesome5 name="bars" size={24} color={COLORS.darkBlue} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1EDFF",
    // borderTopLeftRadius: 38,
    // borderTopRightRadius: 38,
    flex: 1,
    paddingTop: 50,
    padding: 30,
    fontFamily: "Roboto_700Bold",
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
  togleDrawer: {
    position: "absolute",
    right: 15,
    top: 5,
  },
});

export default Report;
