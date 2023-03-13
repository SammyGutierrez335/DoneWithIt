import { 
  SafeAreaView, StyleSheet, View, StatusBar, useWindowDimensions
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks';

//default value is Density-independent Pixels ()
//actually Physical Pixels = DIPs x Scale Factor of device
//ex on Model iPhone 4, 4s:
  //Points 320 x 480
  //Scale Factor of 2 (2 pixels per point)
  //Pixels on screen 640 x 960
  //View Width for 150 with be DIPs (150) x 2 = 300

//iPhone 11Pro Max
  //Points 414 x 896
  //scale factor of 3
  //Pixels on screen 1242 x 2688
  //150 x 3 = 450

export default function App() {

  //this code below will not respond to orientation changes
  //'screen' returns the size of the entire screen while 'window' returns the visible application window (iOS dimensions are equal, different on android)
  // console.log(Dimensions.get('screen'))

  //returns an object {"fontScale": 1, "height": 926, "scale": 3, "width": 428}
  // console.log(useWindowDimensions())

  // returns 'portrait' or 'landscape'
  // console.log(useDeviceOrientation())
  let isPortrait = useDeviceOrientation() === 'portrait'
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        // width: 150,
        width: isPortrait ? '50%' : '100%',
        height: isPortrait ? '50%' : '100%'
      }} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : '0pt'
  },
});
