  import { 
  SafeAreaView , Button, StyleSheet, Alert
} from 'react-native';

export default function App() {
  return (
    // You can pass multiple styles using an array. The result is the combination of styles similar to how you use multiple css classes. The object on the right would over right what is on the left.
    //style=[containerStyle, styles.container]
    //it is conventional to apply styles below component but is you can also import styles from another file.
    <SafeAreaView style={containerStyle}>
      <Button 
        color="orange"
        title="Click Me" 
        // onPress={() => 
          // this api only works on iOS
          // Alert.prompt("Fill in the Blank", "What will you type?", answer => console.log(answer))
        // }
        // The Alert is not a component with a visual representation but instead an api, object with various methods
        //ctrl + spacebar while inside an object to see what propeties an object contains
        // array of buttons is the third parameter 
        onPress={() => Alert.alert("Question", "Will you press yes?", [
          {text: "Yes", onPress: () => console.log("Yes was pressed")},
          {text: "No", onPress: () => console.log("No was pressed")}
        ])}
        // onPress={() => alert("button pressed")}
        // onPress={()=> console.log("button pressed")}
      />
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

//this is not css, but a plan JS object. React-native will map over these properties to build styles
// const containerStyle={backgroundColor: "orange"}

//Whatever object you pass to the create method you get as a result. The purposes are
//validates the properties you pass in (throwing errors for you if you misspell a property)
//the react-native team is working on implementation some optimizations for this, therefore it is the recommended practice. 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: "center",
    justifyContent: "center"
  },
});
