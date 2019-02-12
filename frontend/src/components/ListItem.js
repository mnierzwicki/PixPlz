import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemSelected}>
    <View style={styles.listItem}>
      <Image source={props.image} style={styles.image} resizeMode="cover" />
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
