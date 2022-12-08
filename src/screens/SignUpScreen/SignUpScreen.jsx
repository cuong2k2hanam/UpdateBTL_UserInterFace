import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { authStyles } from "../../styles";
import { theme } from "../../theme";

import Header from "../../components/auth/Header";
import AppPhoneInput from "../../components/auth/AppPhoneInput";
import AppTextInput from "../../components/auth/AppTextInput";
import AppButton from "../../components/auth/AppButton";

export default function SignUpScreen() {
  return (
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Header title={"Đăng ký"} icon={"user-plus"} />
        <AppPhoneInput />
        <AppTextInput icon="user" placeholder="Username" />
      </View>
      <View style={authStyles.buttonContainer}>
        <AppButton
          onPress={() => {}}
          color={theme.colors.primary}
          title="Đăng ký"
        />
      </View>
    </View>
  );
}
