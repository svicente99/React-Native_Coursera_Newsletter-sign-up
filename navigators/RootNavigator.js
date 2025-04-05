import * as React from "react";
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  /* Seting up stack navigation to move between welcome screen and subscribe screen */
  return (
    <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions = {{ headerStyle: { backgroundColor: '#fff'} }} >
    <Stack.Screen 
        options= {{title: "Welcome", headerTitleAlign: 'center',
                                    headerTitleStyle: styles.header}
                 }
        name="Welcome" 
        component={WelcomeScreen} />
    <Stack.Screen 
        name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: '#606060',
  },
});
