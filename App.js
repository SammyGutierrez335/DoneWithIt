  import { 
  SafeAreaView, StyleSheet, View, StatusBar, Dimensions
} from 'react-native';

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
  console.log(Dimensions.get('screen'))
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        // width: 150,
        width: '50%',
        height: 70
      }} 
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : '0'
  },
});
