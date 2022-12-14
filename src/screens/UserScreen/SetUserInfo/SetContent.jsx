import React, { useState, useEffect, useContext } from "react";
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
import { useNavigation } from "@react-navigation/native";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../../../../constants";
import { theme } from "../../../theme.js";
import { UserContext } from "../../../navigation/HomeNavigation";

import { writeUserInfo } from "../../../firebase/UserInfo";

export default function SetContent({ style, user }) {
  const navigation = useNavigation();
  const context = useContext(UserContext);
  const { setUser, change, setChange } = context;
  console.log("Hi " + change);
  // const [user, setUser] = useState(userDefault);
  const [image, setImage] = useState(user.avatar);
  const [firstName, setFisrtName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [alert, setAleart] = useState({
    validation: false,
    error: false,
    success: false,
    message: false,
  });

  async function handleUpdate() {
    if (firstName.length === 0) {
      return setAleart({
        validation: true,
        error: true,
        success: false,
        message: "Họ không được để trống",
      });
    } else if (firstName.length > 50) {
      return setAleart({
        validation: true,
        error: true,
        success: false,
        message: "Họ không được dài hơn 50 ký tự",
      });
    } else if (lastName.length === 0) {
      return setAleart({
        validation: true,
        error: true,
        success: false,
        message: "Tên không được để trống",
      });
    } else if (lastName.length > 50) {
      return setAleart({
        validation: true,
        error: true,
        success: false,
        message: "Tên không được dài hơn 50 ký tự",
      });
    } else if (phone.length === 0) {
      return setAleart({
        validation: true,
        error: true,
        success: false,
        message: "Số điện thoại không được để trống",
      });
    } else {
      let vnf_regex = /((09|03|07|08|05)+([0-9]{8}))/g;
      if (!vnf_regex.test(phone)) {
        return setAleart({
          validation: true,
          error: true,
          success: false,
          message: "Số điện thoại không hợp lệ",
        });
      }
    }

    setChange(true);
    // alert("Chỉnh sửa thông tin thành công");
    setAleart({
      validation: true,
      error: false,
      success: true,
      message: "Thay đổi thông tin thành công",
    });

    setUser({
      ...user,
      email: email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
      avatar: image,
    });
    navigation.navigate("UserInfo");
    return writeUserInfo(email, user);
  }

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
      {console.log(user)}
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
        {alert.validation && (
          <Text style={alert.success ? { color: "green" } : { color: "red" }}>
            {alert.message}
          </Text>
        )}
        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Họ</Text>
          <TextInput
            style={styles.content}
            // autoCapitalize="words"
            value={firstName}
            // onChange={(e) => {
            //   console.log(firstName);
            //   setFisrtName(e.target.value);
            // }}
            onChangeText={(text) => {
              {
                setFisrtName(text);
              }
            }}
          />
        </View>
        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Tên</Text>
          <TextInput
            style={styles.content}
            autoCapitalize="words"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <View style={styles.inforItem}>
          <Text style={styles.titleItem}>Email</Text>
          <TextInput
            style={styles.content}
            readOnly
            keyboardType="email-address"
            value={email}
            // onChange={setEmail}
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
            onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        title="Chỉnh sửa"
        onPress={() => {
          handleUpdate();
        }}
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
