import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: theme.colors.primary,
  },
  form: {
    flex: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUp: {
    alignSelf: "center",
    color: "darkgray",
    fontSize: 14,
  },
});

export const inputStyles = StyleSheet.create({
  mainContianer: {
    alignSelf: "center",
    height: 50,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    marginHorizontal: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
