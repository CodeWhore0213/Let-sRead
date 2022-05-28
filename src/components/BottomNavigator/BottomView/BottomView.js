import React, { useState } from 'react';
import {Button, StyleSheet, View} from 'react-native';


const BottomView = () => {
    return (
        <View style={styles.container}>
<Button style = {styles.buttonStyle}  title='green'/>
<Button style = {styles.buttonStyle}  title='green'/>
<Button style = {styles.buttonStyle}  title='green'/>
<Button style = {styles.buttonStyle}  title='green'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderRadius: 12,
        backgroundColor: '#A3B3D7',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
     },

     buttonStyle: {
         height: '50',
         minWidth: "25%",
         backgroundColor: '#1E6738',
         alignSelf: "flex-start",
     }
})
module.exports = BottomView;