import { 
  SafeAreaView, StyleSheet, View, StatusBar
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //flex in react-native works slightly different then flex in css.
  //one difference is flex boxes stack vertically by default in react native vs css where they stack horizontally.
  //to view all flexDirection options, simply delete and press ctrl + space to view
  //alignItems: 'stretch' is the default secondary axis'
  return (
      <View style={{
        backgroundColor: '#fff',
        flexDirection: 'row', // primary axis is swapped
        justifyContent: "center", //main
        alignItems: 'flex-end', //secondary axis
        flex: 1
      }}>
      <View style={{
        backgroundColor: 'green',
        width: 100,
        height: 300,
        alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'blue',
        width: 100,
        height: 100,
      }} />
        <View style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
        }} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : '0pt'
  },
});
