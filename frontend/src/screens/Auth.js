import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
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
