import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <Image
            source={require("../assets/chair.jpg")} 
            resizeMode='contain'
            style={styles.image}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%"
    }
})