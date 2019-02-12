import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Auth extends React.Component {
  login = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Auth;
