import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { addLocation, deleteLocation, selectLocation, deselectLocation } from "./src/store/actions/index";
import List from "./src/components/List";
import ItemDetail from "./src/components/ItemDetail";
import LocationInput from "./src/components/LocationInput";

class App extends React.Component {
  addLocation = name => {
    this.props.onAddLocation(name);
  };

  deleteLocation = () => {
    this.props.onDeleteLocation();
  };

  selectLocation = key => {
    this.props.onSelectLocation(key);
  };

  closeModal = () => {
    this.props.onDeselectLocation();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PixPlz</Text>

        <LocationInput onLocationAdded={this.addLocation} />
        <List items={this.props.locations} onItemSelected={this.selectLocation} />

        <ItemDetail item={this.props.selectedLocation} onItemDeleted={this.deleteLocation} onModalClosed={this.closeModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25, // distance from absolute edges (both left and right padding!)
    justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 32,
    marginTop: 50,
    marginBottom: 50,
    textAlign: "center"
  }
});

const stateToProps = state => {
  return {
    locations: state.locations.locations,
    selectedLocation: state.locations.selectedLocation
  };
};

const dispatchToProps = dispatch => {
  return {
    onAddLocation: name => dispatch(addLocation(name)),
    onDeleteLocation: () => dispatch(deleteLocation()),
    onSelectLocation: key => dispatch(selectLocation(key)),
    onDeselectLocation: () => dispatch(deselectLocation())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(App);

// export default App;
