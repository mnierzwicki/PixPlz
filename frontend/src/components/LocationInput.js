import React from "react";
import { View, TextInput } from "react-native";

import AppButton from "./AppButton";

class LocationInput extends React.Component {
  state = {
    locationName: ""
  };

  updateLocationName = value => {
    this.setState({
      locationName: value
    });
  };

  addLocation = () => {
    if (this.state.locationName.trim() === "") {
      return;
    }

    this.props.onLocationAdded(this.state.locationName);
  };

  render() {
    return (
      <View>
        <TextInput style={{ fontSize: 24, height: 50 }} placeholder="Bahamas" value={this.state.locationName} onChangeText={this.updateLocationName} />
        <AppButton title="+ Add" onPress={this.addLocation} />
      </View>
    );
  }
}

export default LocationInput;
