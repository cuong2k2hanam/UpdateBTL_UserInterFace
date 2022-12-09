import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../../../constants";
import { theme } from "../../../theme.js";

export default function SetContent({ style, user }) {
  const [image, setImage] = useState(user.avatar);
  const [firstName, setFisrtName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView style={[styles.container, style]}>
      <View style={styles.avatar}>
        {image && (
          <Image
            style={styles.imageAvatar}
            key={image.length}
            source={{ uri: image }}
            // style={{ width: 200, height: 200 }}
          />
        )}
        <TouchableOpacity onPress={pickImage} style={styles.buttonAvatar}>
          <Text style={{ color: theme.colors.primary, fontWeight: "bold" }}>
            Chọn ảnh đại diện
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infor}>
        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Họ</Text>
          <TextInput
            style={styles.content}
            // autoCapitalize="words"
            value={firstName}
            onChange={setFisrtName}
          />
        </View>
        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Tên</Text>
          <TextInput
            style={styles.content}
            autoCapitalize="words"
            value={lastName}
            onChange={setLastName}
          />
        </View>

        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Email</Text>
          <TextInput
            style={styles.content}
            keyboardType="email-address"
            value={email}
            onChange={setEmail}
          />
        </View>
        <View style={styles.inforItem}>
          {/* <Text style={styles.titleItem}>Phone</Text> */}
          {/* <PhoneInput
            style={{ borderRadius: 50 }}
            defaultCode="VN"
            value={phone}
            onChange={setPhone}
          /> */}
          <Text style={styles.titleItem}>Số điện thoại</Text>
          <TextInput
            style={styles.content}
            keyboardType="phone-pad"
            value={phone}
            onChange={setEmail}
          />
        </View>
      </View>
      <TouchableOpacity
        title="Chỉnh sửa"
        onPress={() => {}}
        style={styles.submit}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.white,
          }}
        >
          Chỉnh sửa
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 5,
    height: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    flex: 4,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },

  imageAvatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonAvatar: {
    backgroundColor: theme.colors.thirdPrimary,
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
  },
  infor: {
    flex: 5,
    padding: 15,
    width: "100%",
    backgroundColor: COLORS.secondPrimary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inforItem: {
    // flexDirection: "row",
    // borderWidth: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  titleItem: {
    // flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 20,
    width: "100%",
    marginBottom: 5,
  },
  content: {
    // flex: 2,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: "100%",
  },
  submit: {
    width: "100%",
    backgroundColor: COLORS.lightBlue,
    padding: 10,
    // borderRadius: 20,
  },
});
