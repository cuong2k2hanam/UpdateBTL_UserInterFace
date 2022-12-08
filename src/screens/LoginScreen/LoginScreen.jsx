import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { authStyles } from "../../styles";
import Header from "../../components/auth/Header";
import AppPhoneInput from "../../components/auth/AppPhoneInput";
import AppButton from "../../components/auth/AppButton";
import { theme } from "../../theme";

export default function LoginScreen({ navigation }) {
  return (
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Header title={"Đăng nhập"} icon={"user"} />
        <AppPhoneInput />
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={authStyles.signUp}>Chưa có tài khoản? Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={authStyles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate("VerificationScreen")}
          color={theme.colors.primary}
          title="Đăng nhập"
        />
      </View>
    </View>
  );
}
