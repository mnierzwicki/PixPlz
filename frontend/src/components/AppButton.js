import React from "react";
import { View, Button, StyleSheet } from "react-native";

const AppButton = props => (
  <View style={styles.container}>
    <Button title={props.title} onPress={props.onPress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }
});

export default AppButton;
