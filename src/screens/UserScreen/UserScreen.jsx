import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

// import Home from "./Page/Home";
// import Home from "./Page/HomeTest";
// import Popup from "./Page/Modal";
// import Report from "./Page/Report";
// import Report from "./Page/SuggestFeature";
import AuthorList from "./Author/AuthorList";

import UserInfo from "./UserInfo/UserInfo";
import SetUserInfo from "./SetUserInfo/SetUserInfo";

import { theme } from "../../theme";

// import Home from "../Bach/Home";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <AuthorList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  contain: {
    flex: 1,
  },
});
