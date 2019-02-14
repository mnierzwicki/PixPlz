import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import App from "./App";
import configStore from "./src/store/config";
import { registerScreens } from "./src/screens/screens";

const store = configStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerScreens();
// Navigation.registerComponent(`App`, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Loading"
      }
    }
  });
});
