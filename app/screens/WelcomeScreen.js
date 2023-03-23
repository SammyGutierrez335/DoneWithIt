import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
            <Image source={require("../assets/d-letter-logo.png")} style={styles.logo}></Image>
            <Text>Sell What You Don't Need</Text>
        </View>
        <View style={[styles.button, {backgroundColor: '#fc5c65'}]}><Text style={styles.buttonText}>Register</Text></View>
        <View style={[styles.button, {backgroundColor: '#4ecdc4'}]}><Text style={styles.buttonText}>Login</Text></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        //image background will take the entire screen
        flex: 1,
        //by default the main axis is column
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    }
})