/**
 *  Coursera - React Native - final assignment
 *  author.: Sergio Vicente @svicente99
 *  date...: Apr. 20025
 */

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}