// import { 
//   SafeAreaView , Button
// } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
}


// The code below was used for familiarizing myself with view, image and touchable components.

// import { StatusBar } from 'expo-status-bar';
// import { 
//   StyleSheet, Text, View, 
//   SafeAreaView , Image, 
//   // TouchableWithoutFeedback
//   // TouchableOpacity,
//   // TouchableHighlight,
//   TouchableNativeFeedback
// } from 'react-native';
// //View is like a div in the web world
// //Text is used to render text on the screen

// //react-native will map View to native widgets depending on OS
// //View -> on iOS will become UIView and AndroidView on Android

// //xcode is a great iOS emulsator tool

// //safe area view provides some padding to try to account for phone bezzles/notches
// export default function App() {


//   // when we use the require function, react native package will include this file in the bundle (increasing size of app)
//   // you can also download files from the internet to minimize app size.
//   // !! the require function will return a reference to the image not the actual image itself
//   // console.log(('require("./assets/icon.png'));
//   // const handlePress = () => console.log("Image Pressed")
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1}>Done With It!</Text>
//       {/* touchable native feedback isn't supported in iOS and throws a warning. It also has no effect on images. */}
//       <TouchableNativeFeedback>
//         <View style={{ width: 200, height: 70, backgroundColor: "green"}}></View>
//       </TouchableNativeFeedback>
//       {/* <TouchableWithoutFeedback onPress={handlePress}> */}
//       {/* <TouchableOpacity> */}
//       {/* <TouchableHighlight> */}
//         {/* <Image 
//           // blurRadius={10}
//           fadeDuration={1000}
//           // source={require('./assets/icon.png')}
//           resizeMode={"contain"}
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300"
//           }}
//         /> */}
//       {/* </TouchableHighlight> */}
//       {/* </TouchableOpacity> */}
//       {/* </TouchableWithoutFeedback> */}
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: "center",
    justifyContent: "center"
  },
});
