import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  comment_child: {
    // borderWidth: 2,
    margin: 10,
  },
  user_title: {
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
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
  name: {
    marginLeft: 5,
    fontWeight: "bold",
  },

  user_comment: {
    // borderWidth: 2,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#b8c0c1",
  },
});

export default styles;
