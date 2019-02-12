import React from "react";
import { Modal, View, Image, Text, StyleSheet } from "react-native";

import IconButton from "./IconButton";

const ItemDetail = props => (
  <Modal visible={props.item !== null} onRequestClose={props.onModalClosed} animationType="slide">
    <View style={styles.container}>
      {props.item && (
        <View>
          <Image source={props.item.image} style={styles.image} />
          <Text style={styles.text}>{props.item.name}</Text>
        </View>
      )}

      <View style={styles.buttons}>
        <IconButton text="Remove" icon="trash" onPress={props.onItemDeleted} />
        <IconButton text="Close" icon="x" onPress={props.onModalClosed} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    // marginTop: 75
  },
  image: {
    height: 400,
    width: "100%"
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default ItemDetail;
