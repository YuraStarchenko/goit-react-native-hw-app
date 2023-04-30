import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/PhotoBG.png")}
        style={styles.image}
      >
        <TextInput style={styles.input}></TextInput>
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
  input: {
		borderWidth: 2,
		height: 50,
		borderRadius: 8,
    borderColor: "#F6F6F6",

    fontSize: 30,
    color: "green",
  },
});
