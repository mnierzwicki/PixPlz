import { Navigation } from "react-native-navigation";

import Home from "./Home";
import Loading from "./Loading";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Screen2 from "./Screen2";

export function registerScreens() {
  Navigation.registerComponent(`Auth`, () => Auth);

  Navigation.registerComponent(`Home`, () => Home);
  Navigation.registerComponent(`Loading`, () => Loading);
  Navigation.registerComponent(`SignIn`, () => SignIn);
  Navigation.registerComponent(`SignUp`, () => SignUp);
  Navigation.registerComponent(`Screen2`, () => Screen2);
}
