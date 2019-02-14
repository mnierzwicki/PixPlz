import { Navigation } from "react-native-navigation";

import Loading from "./Loading";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Screen2 from "./Screen2";
import Search from "./Search";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Settings from "./Settings";
import Camera from "./Camera";

export function registerScreens() {
  Navigation.registerComponent(`Loading`, () => Loading);
  Navigation.registerComponent(`SignIn`, () => SignIn);
  Navigation.registerComponent(`SignUp`, () => SignUp);
  Navigation.registerComponent(`Home`, () => Home);
  Navigation.registerComponent(`Screen2`, () => Screen2);
  Navigation.registerComponent(`Search`, () => Search);
  Navigation.registerComponent(`Notifications`, () => Notifications);
  Navigation.registerComponent(`Messages`, () => Messages);
  Navigation.registerComponent(`Settings`, () => Settings);
  Navigation.registerComponent(`Camera`, () => Camera);
}
