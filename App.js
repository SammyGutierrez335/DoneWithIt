import { 
  SafeAreaView, StyleSheet, View, StatusBar
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //flex in react-native works slightly different then flex in css.
  return (
      <View style={{
        backgroundColor: '#fff',
        flex: 1
      }}>
      <View style={{
        backgroundColor: 'green',
        flex: 1,
      }} />
      <View style={{
        backgroundColor: 'white',
        flex: 2,
      }} />
        <View style={{
          backgroundColor: 'red',
          flex: 1,
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
