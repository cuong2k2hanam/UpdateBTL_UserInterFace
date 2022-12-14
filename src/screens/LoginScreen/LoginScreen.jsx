// import { View, Text, TouchableOpacity } from "react-native";
// import React from "react";

// import { run } from "../../firebase/firestore";

// import { authStyles } from "../../styles";
// import Header from "../../components/auth/Header";
// import AppPhoneInput from "../../components/auth/AppPhoneInput";
// import AppButton from "../../components/auth/AppButton";
// import { theme } from "../../theme";

// export default function LoginScreen({ navigation }) {
//   run();
//   return (
//     <View style={authStyles.container}>
//       <View style={authStyles.form}>
//         <Header title={"Đăng nhập"} icon={"user"} />
//         <AppPhoneInput />
//         <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
//           <Text style={authStyles.signUp}>Chưa có tài khoản? Đăng ký</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={authStyles.buttonContainer}>
//         <AppButton
//           onPress={() => navigation.navigate("VerificationScreen")}
//           color={theme.colors.primary}
//           title="Đăng nhập"
//         />
//       </View>
//     </View>
//   );
// }

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import { Avatar, Button, Icon, LinearProgress } from "react-native-elements";

import {
  signInAcountWithEmailAndPassword,
  auth,
} from "../../firebase/Authentication";

import { authStyles } from "../../styles";
import Header from "../../components/auth/Header";
import AppPhoneInput from "../../components/auth/AppPhoneInput";
import AppButton from "../../components/auth/AppButton";
import { theme } from "../../theme";
import { AppContext } from "../../context/AppProvider";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleLogIn() {
    if (email === "") {
      setError("Email không được để trống");
    } else if (password === "") {
      setError("Mật khẩu không được để trống");
    } else {
      signInAcountWithEmailAndPassword(
        auth,
        email,
        password,
        navigation,
        setError
      );
    }
  }

  return (
    <View style={authStyles.container}>
      <View style={styles.subcontainer}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={5}
          style={{ flex: 1 }}
          enabled
        >
          <View style={styles.center}>
            <Avatar
              size={100}
              rounded
              source={{
                uri: "https://i.pinimg.com/564x/38/df/03/38df03ae9475b6d00523cf716181e1a4.jpg",
              }}
            />
            <Text style={styles.title}>Tủ sách nói</Text>
          </View>

          <View>
            <Text style={[styles.title]}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(newText) => setEmail(newText)}
            />
            <Text style={[styles.title]}>Mật khẩu</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(newText) => setPassword(newText)}
            />
          </View>
          {error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>}
          <View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => handleLogIn()}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={authStyles.signUp}>Chưa có tài khoản? Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1EDFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    // flex: 1,
    fontFamily: "sans-serif",
  },
  subcontainer: {
    backgroundColor: "#E1EDFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    flex: 1,
    marginTop: 50,
    padding: 30,
    fontFamily: "sans-serif",
  },
  title: {
    marginVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#ffff",
    borderWidth: 0,
    fontSize: 20,
  },
  button: {
    borderRadius: 20,
    alignItems: "center",
    // justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: "rgba(69, 89, 189, 0.6)",
    marginTop: 40,
    marginBottom: 10,
  },
  wrapperIcon: {
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
