import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/PhotoBG.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -368 : 32,
            }}
          >
            <View>
              <Text style={styles.inputTitle}>Регистрация</Text>
              <TextInput
                style={styles.login}
                textAlign={"center"}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
              ></TextInput>
              <TextInput
                style={styles.mail}
                textAlign={"center"}
                placeholder="Адрес электронной почты"
                onFocus={() => setIsShowKeyboard(true)}
              ></TextInput>
              <TextInput
                style={styles.password}
                textAlign={"center"}
                placeholder="Пароль"
                onFocus={() => setIsShowKeyboard(true)}
                secureTextEntry={true}
              ></TextInput>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },

  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  inputTitle: {
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
  },

  login: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    fontSize: 20,
    color: "#BDBDBD",
  },

  mail: {
    borderWidth: 1,
    height: 50,
    marginBottom: 16,
    marginTop: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 20,
    color: "#BDBDBD",
  },

  password: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    fontSize: 20,
    color: "#BDBDBD",
  },

  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 113,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
});
