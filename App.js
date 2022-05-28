/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Text, TextInput, View, FlatList, StyleSheet, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LoginView = require('./src/components/Login/LoginView.js');
const HomeView = require('./src/components/Home/Home.js')


const App = () => {
  return (
    <NavigationContainer>
        <HomeView/>
    </NavigationContainer>
  )
}

export default App;