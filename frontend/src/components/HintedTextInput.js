import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

class HintedTextInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hintContainer}>
          <Text style={styles.hint}>{this.props.hint}</Text>
        </View>
        <View style={styles.textContainer}>
          <TextInput style={styles.textInput} onChangeText={this.onChangeText} spellCheck={false} autoCorrect={false} autoCapitalize="none" secureTextEntry={this.props.secure} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25
  },
  hintContainer: {
    marginLeft: 15,
    width: "35%"
  },
  hint: {
    fontSize: 16,
    color: "#D3D3D3"
  },
  textContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    marginRight: 15
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 28,
    width: "100%",
    textAlign: "right",
    height: 50
  }
});

HintedTextInput.defaultProps = {
  secure: false
};

export default HintedTextInput;
