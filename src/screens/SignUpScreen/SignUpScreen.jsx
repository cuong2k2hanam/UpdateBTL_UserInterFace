import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { authStyles } from "../../styles";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/auth/Header";
import AppPhoneInput from "../../components/auth/AppPhoneInput";
import AppTextInput from "../../components/auth/AppTextInput";
import AppButton from "../../components/auth/AppButton";

export default function SignUpScreen({ router, navigation }) {
  return (
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Header title={"Đăng ký"} icon={"user-plus"} />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 25,
            left: 15,
            color: theme.colors.white,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.white} />
        </TouchableOpacity>
        <AppPhoneInput />
        <AppTextInput icon="user" placeholder="Username" />
      </View>
      <View style={authStyles.buttonContainer}>
        <AppButton
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
          color={theme.colors.primary}
          title="Đăng ký"
        />
      </View>
    </View>
  );
}
