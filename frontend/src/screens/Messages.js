import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Messages extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Messages"
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Messages</Text>
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

export default Messages;
