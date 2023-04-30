import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/PhotoBG.png")}
        style={styles.image}
      >
        <TextInput
          style={styles.login}
          textAlign={"left"}
          placeholder="Логин"
        ></TextInput>
        <TextInput
          style={styles.mail}
          textAlign={"left"}
          placeholder="Адрес электронной почты"
        ></TextInput>
        <TextInput
          style={styles.password}
          textAlign={"left"}
          placeholder="Пароль"
        ></TextInput>
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
    alignItems: "center",
  },

  login: {
    borderWidth: 1,
    height: 50,
		width: 343,
		marginLeft: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },

  mail: {
    borderWidth: 1,
    height: 50,
    width: 343,
    marginBottom: 16,
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },

  password: {
    borderWidth: 1,
    height: 50,
    width: 343,
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 20,
    color: "#F6F6F6",
  },
});
