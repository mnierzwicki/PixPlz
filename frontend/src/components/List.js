import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "./ListItem";

const List = props => (
  <FlatList data={props.items} renderItem={({ item }) => <ListItem name={item.name} image={item.image} onItemSelected={() => props.onItemSelected(item.key)} />} />
);

export default List;
