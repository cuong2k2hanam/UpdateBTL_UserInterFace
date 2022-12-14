import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { run } from "../../firebase/firestore";
import {
  createAcountWithEmailAndPassword,
  auth,
} from "../../firebase/Authentication";

import { Avatar, Button, Icon, LinearProgress } from "react-native-elements";
import { authStyles } from "../../styles";
// import Header from "../../components/auth/Header";
// import AppPhoneInput from "../../components/auth/AppPhoneInput";
// import AppButton from "../../components/auth/AppButton";
// import { theme } from "../../theme";

export default function LoginScreen({ navigation }) {
  run();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [error, setError] = useState("");

  function handleSignUp() {
    if (repeatPassword === password) {
      createAcountWithEmailAndPassword(
        auth,
        email,
        password,
        navigation,
        setError
      );
    } else if (password.length == 0) {
      // alert("Mật khẩu không được để trống");
      setError("Mật khẩu không được để trống");
    } else {
      // alert("Mật khẩu xác nhận không chính xác");
      setError("Mật khẩu xác nhận không chính xác");
    }
  }

  return (
    // <View style={authStyles.container}>
    //   <View style={authStyles.form}>
    //     <Header title={"Đăng nhập"} icon={"user"} />
    //     <AppPhoneInput />
    //     <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
    //       <Text style={authStyles.signUp}>Chưa có tài khoản? Đăng ký</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={authStyles.buttonContainer}>
    //     <AppButton
    //       onPress={() => navigation.navigate("VerificationScreen")}
    //       color={theme.colors.primary}
    //       title="Đăng nhập"
    //     />
    //   </View>
    // </View>
    <View style={authStyles.container}>
      <View style={authStyles.container}>
        <View style={styles.subcontainer}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={5}
            style={{ flex: 1 }}
            enabled
          >
            <View style={styles.center}>
              <Avatar
                size={100}
                rounded
                source={{
                  uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
                }}
              />
              <Text style={styles.title}>Tủ sách nói</Text>
            </View>

            <View>
              <Text style={[styles.title]}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                onChangeText={(newText) => setEmail(newText)}
                defaultValue={email}
              />
              <Text style={[styles.title]}>Mật khẩu</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(newText) => setPassword(newText)}
                defaultValue={password}
              />
              <Text style={[styles.title]}>Nhập lại mật khẩu</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(newText) => setRepeatPassword(newText)}
                defaultValue={repeatPassword}
              />
            </View>
            {error && (
              <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
            )}
            <View>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => handleSignUp()}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Đăng ký
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={authStyles.signUp}>
                  Bạn đã có tài khoản? Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1EDFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    // flex: 1,
    fontFamily: "sans-serif",
  },
  subcontainer: {
    backgroundColor: "#E1EDFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    flex: 1,
    marginTop: 50,
    padding: 30,
    fontFamily: "sans-serif",
  },
  title: {
    marginBottom: 8,
    marginTop: 10,
    // fontWeight: 'bold',
    fontSize: 18,
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
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: "rgba(69, 89, 189, 0.6)",
    marginTop: 40,
    marginBottom: 10,
  },
  wrapperIcon: {
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
