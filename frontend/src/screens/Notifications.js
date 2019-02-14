import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Notifications extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Notifications"
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
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

export default Notifications;
