import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
const BottomView = require('../BottomNavigator/BottomView/BottomView.js');

const HomeView = () => {
    return(
        <View style={styles.container}>
          <BottomView style={styles.bottomView}/>
        </View>
    )
}

const styles = StyleSheet.create ({
 container: {
     backgroundColor: '#EDF0F4',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
 },

 bottomView: {
     flex: 1,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',
 }
})

module.exports = HomeView;