import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { UserContext } from "../HomeNavigation";

// import { user } from "../../data";
import { COLORS, SIZES } from "../../../constants";

import { Ionicons } from "@expo/vector-icons";

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const context = useContext(UserContext);
  const { user } = context;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "rgba(69, 89, 189, 0.2)" }}
      >
        <ImageBackground
          source={{
            uri: "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/background-user.webp",
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={{ uri: user.avatar }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "Roboto_700Bold",
            }}
          >
            {user.lastName}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={24} color="black" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto_700Bold",
                marginLeft: 5,
              }}
            >
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
