import { ImageBackground, StyleSheet, View} from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}
    >
        <View style={[styles.button, {backgroundColor: '#fc5c65'}]}></View>
        <View style={[styles.button, {backgroundColor: '#4ecdc4'}]}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        //image background will take the entire screen
        flex: 1,
        //by default the main axis is column
        justifyContent: 'flex-end'
    },
    button: {
        width: '100%',
        height: 70,
    }
})