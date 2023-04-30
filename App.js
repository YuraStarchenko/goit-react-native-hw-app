import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/PhotoBG.png")}
        style={styles.image}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Регистрация</Text>
            <TextInput
              style={styles.login}
              textAlign={"center"}
              placeholder="Логин"
            ></TextInput>
            <TextInput
              style={styles.mail}
              textAlign={"center"}
              placeholder="Адрес электронной почты"
            ></TextInput>
            <TextInput
              style={styles.password}
              textAlign={"center"}
              placeholder="Пароль"
              secureTextEntry={true}
            ></TextInput>
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
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
    marginHorizontal: 16,
  },

  inputTitle: {
    fontSize: 30,
    fontWeight: 500,
  },

  login: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },

  mail: {
    borderWidth: 1,
    height: 50,
    marginBottom: 16,
    marginTop: 16,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },

  password: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },

  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
		alignItems: "center",
	},
	
  btnTitle: {
    color: "#ffffff",
    fontSize: 16,
  },
});
