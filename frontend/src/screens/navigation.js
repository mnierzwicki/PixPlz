import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";

export async function prepareIcons() {
  const icons = await Promise.all([
    Icon.getImageSource("log-in", 30),
    Icon.getImageSource("edit", 30),
    Icon.getImageSource("home", 30),
    Icon.getImageSource("search", 30),
    Icon.getImageSource("bell", 30),
    Icon.getImageSource("message-square", 30),
    Icon.getImageSource("settings", 30),
    Icon.getImageSource("camera", 30)
  ]);
  const [login, create, home, search, notifications, messages, settings, camera] = icons;
  return { login, create, home, search, notifications, messages, settings, camera };
}

export async function goToAuth() {
  const icons = await prepareIcons();

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        // options: {
        //   bottomTabs: {
        //     titleDisplayMode: "alwaysShow"
        //   }
        // },
        children: [
          {
            component: {
              name: "SignIn",
              options: {
                bottomTab: {
                  // text: "Sign In",
                  // fontSize: 12,
                  // selectedFontSize: 12,
                  // textColor: "#757575",
                  // selectedTextColor: "black",
                  icon: icons.login,
                  iconColor: "#757575",
                  selectedIconColor: "black"
                }
              }
            }
          },
          {
            component: {
              name: "SignUp",
              options: {
                bottomTab: {
                  // text: "Sign Up",
                  // fontSize: 12,
                  // textColor: "#757575",
                  // selectedFontSize: 12,
                  // selectedTextColor: "black",
                  icon: icons.create,
                  iconColor: "#757575",
                  selectedIconColor: "black"
                }
              }
            }
          }
        ]
      }
    }
  });
}

export async function goHome() {
  const icons = await prepareIcons();

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        options: {
          bottomTabs: {
            // titleDisplayMode: "alwaysShow"
          }
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Home",
                    options: {
                      topBar: {
                        rightButtons: [
                          {
                            id: "settingsButton",
                            icon: icons.settings
                          }
                        ],
                        leftButtons: [
                          {
                            id: "cameraButton",
                            icon: icons.camera
                          }
                        ]
                      },
                      bottomTab: {
                        // text: "Home",
                        // fontSize: 12,
                        // selectedFontSize: 12,
                        // textColor: "#757575",
                        // selectedTextColor: "black",
                        icon: icons.home,
                        iconColor: "#757575",
                        selectedIconColor: "black"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Search",
                    options: {
                      bottomTab: {
                        // text: "Search",
                        // fontSize: 12,
                        // selectedFontSize: 12,
                        // textColor: "#757575",
                        // selectedTextColor: "black",
                        icon: icons.search,
                        iconColor: "#757575",
                        selectedIconColor: "black"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Notifications",
                    options: {
                      bottomTab: {
                        // text: "Notifications",
                        // fontSize: 12,
                        // selectedFontSize: 12,
                        // textColor: "#757575",
                        // selectedTextColor: "black",
                        icon: icons.notifications,
                        iconColor: "#757575",
                        selectedIconColor: "black"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Messages",
                    options: {
                      bottomTab: {
                        // text: "Messages",
                        // fontSize: 12,
                        // selectedFontSize: 12,
                        // textColor: "#757575",
                        // selectedTextColor: "black",
                        icon: icons.messages,
                        iconColor: "#757575",
                        selectedIconColor: "black"
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
}
