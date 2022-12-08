import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

import { inputStyles } from "../../styles";
import { theme } from "../../theme";

export default function AppPhoneInput() {
  const phoneInput = useRef();
  return (
    <View style={inputStyles.mainContianer}>
      <PhoneInput
        ref={phoneInput}
        defaultCode="BF"
        withDarkTheme
        withShadow
        textContainerStyle={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    fontSize: 15,
    flex: 1,
    height: 50,
  },
});
