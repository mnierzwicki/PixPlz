import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Feather";

const IconButton = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.inner}>
        <View style={styles.innerPadding}>
          <Icon size={30} name={props.icon} />
        </View>
        <View style={styles.innerPadding}>
          <Text>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  innerPadding: {
    padding: 10
  },
  container: {
    flexGrow: 1,
    padding: 2
  }
});

export default IconButton;
