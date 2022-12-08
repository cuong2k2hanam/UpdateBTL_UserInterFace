import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../../theme";
// import { useNavigation } from "@react-navigation/native";

export default function ReadAndListen({ style, navigation, mybook }) {
  // const usenavigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.readButton}
        onPress={() => {
          navigation.navigate("BookView", { mybook: mybook });
        }}
      >
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Đọc sách
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listenButton}
        onPress={() => {
          navigation.navigate("BookListen", { mybook: mybook });
        }}
      >
        <Text
          style={{
            color: theme.colors.white,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Nghe sách
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingHorizontal: "15%",
  },
  readButton: {
    backgroundColor: theme.colors.button1,
    width: "45%",
    // alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  listenButton: {
    backgroundColor: theme.colors.black,
    width: "45%",
    justifyContent: "center",
    borderRadius: 30,
  },
});
