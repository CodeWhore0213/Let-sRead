import React, { useState } from 'react';
import {Button, Text, TextInput, View, FlatList, StyleSheet, Image, ImageBackground} from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
const GoogleFactoy = require('../GoogleFactory/GoogleSignIn/GoogleSingIn.js');

const LoginView = () => {

 return (
   <View style={styles.container}>
     <ImageBackground style={styles.backgroundImage} source={require('./Images/LightReading.jpg')}>
         
      <GoogleSigninButton
                style={styles.googleButtonStyle}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={GoogleFactoy.signInViaGoogle}
              /> 
     </ImageBackground> 
     </View>
 );
}

const styles = StyleSheet.create ({
  container: {
         flex: 1,
         justifyContent: 'center',
         alignContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  googleButtonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 200,
  }
});

module.exports = LoginView;