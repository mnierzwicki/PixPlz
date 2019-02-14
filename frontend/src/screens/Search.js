import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Search extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Search"
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
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

export default Search;
