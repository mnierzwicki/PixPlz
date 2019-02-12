import React from "react";
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage } from "react-native";

import { goHome } from "./navigation";
import { USER_KEY } from "./config";
import HintedTextInput from "../components/HintedTextInput";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  signIn = async () => {
    const { username, password } = this.state;
    try {
      // todo: login
      const user = await AsyncStorage.setItem(USER_KEY, username);
      console.log("user successfully signed in!", user);
      goHome();
    } catch (err) {
      console.log("error:", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <HintedTextInput hint="Username" onChangeText={val => this.onChangeText("username", val)} />
        <HintedTextInput hint="Password" secure={true} onChangeText={val => this.onChangeText("password", val)} />

        <View style={{ width: "80%", marginTop: 50 }}>
          <Button title="Sign In" onPress={this.signIn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignIn;
