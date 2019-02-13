import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

class HintedTextInput extends React.Component {
  state = {
    style: {}
  };

  onFocus = () => {
    const state = { ...this.state };

    state.style = {
      borderColor: "dodgerblue"
    };

    this.setState(state);
  };

  onBlur = () => {
    const state = { ...this.state };

    state.style = {
      borderColor: "#ededed"
    };

    this.setState(state);
  };

  render() {
    return (
      <View style={[styles.container, this.state.style]}>
        <View style={styles.hintContainer}>
          <Text style={styles.hint}>{this.props.hint}</Text>
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            onChangeText={this.onChangeText}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={this.props.secure}
          />
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
    marginBottom: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ededed"
  },
  hintContainer: {
    marginLeft: 15,
    width: "35%"
  },
  hint: {
    fontSize: 16,
    color: "#696969",
    letterSpacing: 1
  },
  textContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    marginRight: 15
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 24,
    width: "100%",
    textAlign: "right",
    height: 50
  }
});

HintedTextInput.defaultProps = {
  secure: false
};

export default HintedTextInput;
