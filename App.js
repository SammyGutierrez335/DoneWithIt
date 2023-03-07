import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//View is like a div in the web world
//Text is used to render text on the screen

//react-native will map View to native widgets depending on OS
//View -> on iOS will become UIView and AndroidView on Android

//xcode is a great iOS emulsator tool

//safe area view provides some padding to try to account for phone bezzles/notches
export default function App() {

  const handlePress = () => console.log("This text has been pressed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Done With It! - An app for selling stuff that you haven't used in years!
        </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignContent: "center",
    justifyContent: "center"
  },
});
