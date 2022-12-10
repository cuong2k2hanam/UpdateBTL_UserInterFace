import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { authStyles } from "../../styles";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/auth/Header";
import AppTextInput from "../../components/auth/AppTextInput";
import AppButton from "../../components/auth/AppButton";

export default function VerificationScreen({ navigation }) {
  return (
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Header title={"Kiểm tra"} icon={"check-circle"} />
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
        <AppTextInput icon="lock" placeholder="123456" />
      </View>
      <View style={authStyles.buttonContainer}>
        <AppButton
          onPress={() =>
            navigation.navigate("HomeNavigator", {
              screen: "HomeScreen",
            })
          }
          color={theme.colors.primary}
          title="Kiểm tra"
        />
      </View>
    </View>
  );
}
