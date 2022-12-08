import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  commentContent: {
    // borderWidth: 2,
    height: "40%",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 100,
    // borderWidth: 2,
    height: 40,
    width: 40,
  },
  avatarImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 100,
  },
  comment_input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    padding: 10,
    width: "80%",
  },
});

export default styles;
