import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { authStyles } from "../../styles";
import { theme } from "../../theme";

import Header from "../../components/auth/Header";
import AppTextInput from "../../components/auth/AppTextInput";
import AppButton from "../../components/auth/AppButton";

export default function VerificationScreen({ navigation }) {
  return (
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Header title={"Kiểm tra"} icon={"check-circle"} />
        <AppTextInput icon="lock" placeholder="123456" />
      </View>
      <View style={authStyles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate("HomeNavigator")}
          color={theme.colors.primary}
          title="Kiểm tra"
        />
      </View>
    </View>
  );
}
