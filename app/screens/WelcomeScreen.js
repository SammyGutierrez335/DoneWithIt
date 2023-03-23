import { ImageBackground, StyleSheet} from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}
    />
  )
}

const styles = StyleSheet.create({
    background: {
        //image background will take the entire screen
        flex: 1
    }
})