import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../theme";
// import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation, title, style, setPlayAudio }) {
  const route = useRoute();
  // const usenavigation = useNavigation();

  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (setPlayAudio) {
            setPlayAudio(false);
          }
          navigation.goBack();
          console.log(route.name);
        }}
      >
        <Ionicons name="arrow-back" size={24} color={theme.colors.white} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: theme.colors.white,
            fontSize: 18,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 10,
  },
  title: {
    // borderWidth: 2,
    width: "100%",
  },
});
