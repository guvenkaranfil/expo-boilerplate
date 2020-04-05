import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { SignIn, Home } from "../containers";

const authStack = createStackNavigator({
  signIn: SignIn,
});

const appStack = createStackNavigator({
  home: Home,
});

const app = createSwitchNavigator({
  auth: authStack,
  app: appStack,
});

export default createAppContainer(app);
