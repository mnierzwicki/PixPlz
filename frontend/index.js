import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import App from "./App";
import Auth from "./src/screens/Auth";
import configStore from "./src/store/config";

const store = configStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Navigation.registerComponent(`pixplz.Auth`, () => Auth);
Navigation.registerComponent(`pixplz.App`, () => RNRedux);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "pixplz.Auth"
      }
    }
  });
});
