import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";

async function prepareIcons() {
  const icons = await Promise.all([Icon.getImageSource("log-in", 30), Icon.getImageSource("edit", 30)]);
  const [login, create] = icons;
  return { login, create };
}

export async function goToAuth() {
  const icons = await prepareIcons();

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        options: {
          bottomTabs: {
            titleDisplayMode: "alwaysShow"
          }
        },
        children: [
          {
            component: {
              id: "SignIn",
              name: "SignIn",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Sign In",
                  icon: icons.login
                },
                topBar: {
                  title: {
                    text: "Sign In"
                  }
                }
              }
            }
          },
          {
            component: {
              id: "SignUp",
              name: "SignUp",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Sign Up",
                  icon: icons.create
                }
              }
            }
          }
        ]
      }
    }
  });
}

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: "Home"
            }
          }
        ]
      }
    }
  });
