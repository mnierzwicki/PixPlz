import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Settings extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Settings"
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
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

export default Settings;
