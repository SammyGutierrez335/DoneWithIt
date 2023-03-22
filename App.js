import { 
  SafeAreaView, StyleSheet, View, StatusBar
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  //flex in react-native works slightly different then flex in css.
  //one difference is flex boxes stack vertically by default in react native vs css where they stack horizontally.
  //to view all flexDirection options, simply delete and press ctrl + space to view
  //alignItems: 'stretch' is the default secondary axis'

  //when items overflow on the main axis, one or more items will get shrunk to fit new item. flexWrap: 'noWrap' is default
  //to fix this use flexWrap: "wrap"
  return (
      <View style={{
        backgroundColor: '#fff',
        flexDirection: 'row', // primary axis is swapped
        justifyContent: "center", //main
        // alignItems: 'flex-end', //secondary axis (aligns items within each line)
        alignItems: 'center', //secondary axis (aligns items within each line)
        alignContent: "center", //only works if you have wrapping
        flex: 1
      }}>
      <View style={{
        backgroundColor: 'blue',
        // alignSelf: 'flex-start'
        flexBasis: 100, //flex basis can map the width or height depending on which is the primary axis
        flexGrow: 1, //'flex' is shorthand for flexGrow (positive integers) and flexShrink (negative)
        //flexShrink is not used as often but it informs views to shrink if there is an overflow
        height: 100,
        // alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
      }} />
        <View style={{
          backgroundColor: 'tomato',
          // width: 100,
          flex: -1,
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
