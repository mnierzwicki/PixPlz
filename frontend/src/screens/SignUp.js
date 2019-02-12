import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import HintedTextInput from "../components/HintedTextInput";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: ""
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // todo: signup
      console.log("user successfully signed up! ");
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <HintedTextInput hint="Username" onChangeText={val => this.onChangeText("username", val)} />
        <HintedTextInput hint="Password" secure={true} onChangeText={val => this.onChangeText("password", val)} />
        <HintedTextInput hint="Email" onChangeText={val => this.onChangeText("email", val)} />
        <HintedTextInput hint="Phone Number" onChangeText={val => this.onChangeText("phone", val)} />

        <View style={{ width: "80%", marginTop: 50 }}>
          <Button title="Sign Up" onPress={this.signUp} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignUp;
