import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//View is like a div in the web world
//Text is used to render text on the screen

//react-native will map View to native widgets depending on OS
//View -> on iOS will become UIView and AndroidView on Android

//xcode is a great iOS emulsator tool
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Done With It!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
