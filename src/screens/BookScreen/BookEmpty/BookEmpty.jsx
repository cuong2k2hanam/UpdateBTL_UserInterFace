import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Header from "../../../components/common/Header";
import { theme } from "../../../theme";

export default function BookEmpty({ route, navigation }) {
  const image = {
    uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/empty-book-background.jpg",
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Header
        title={"Thông tin sách"}
        navigation={navigation}
        style={styles.header}
      />
      <View style={styles.emptyPage}>
        <View style={styles.emptyNotation}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "900",
              fontSize: 18,
              color: "rgba(0,0,0, 0.5)",
            }}
          >
            Vui lòng chọn cuốn sách bạn muốn đọc
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  header: {
    backgroundColor: theme.colors.primary,
  },
  emptyPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
  },
  emptyNotation: {
    // borderWidth: 2,
    height: "80%",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: "rgba(217,217,217, 0.5)",
    justifyContent: "center",
  },
});
