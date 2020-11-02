/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./Main";
import CoverScreen from './CoverScreen'
import LoginScreen from './Login'
import Details from './Details'

const Stack = createStackNavigator();
const App =() => {
  return (
   
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen  headerShown='none' name="CoverScreen" component={CoverScreen} />
        <Stack.Screen  headerShown='none'name="Login" component={LoginScreen} />
      <Stack.Screen  headerShown='none'name="Main" component={Main} />
      <Stack.Screen  headerShown='none'name="Details" component={Details} />
      
    </Stack.Navigator>
  </NavigationContainer>

  );
};

const styles = StyleSheet.create({
 
});

export default App;
