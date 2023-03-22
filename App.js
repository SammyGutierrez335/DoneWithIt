import { 
    SafeAreaView, StyleSheet, View, TouchableNativeFeedback, Text
  } from 'react-native';
  
  export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                    backgroundColor: 'white',
                    // alignSelf: 'flex-start'
                    flexBasis: 100, //flex basis can map the width or height depending on which is the primary axis
                    flexGrow: 1, //'flex' is shorthand for flexGrow (positive integers) and flexShrink (negative)
                    //flexShrink is not used as often but it informs views to shrink if there is an overflow
                    }}></View>
            <TouchableNativeFeedback onPress={() => console.log("You clicked the Login Button")}>
             <View style={{
                    backgroundColor: 'salmon',
                    // alignSelf: 'flex-start'
                    flexBasis: 50, //flex basis can map the width or height depending on which is the primary axis
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}><Text style={{color: 'white'}}>Login</Text></View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => console.log("You clicked the Register Button")}>
             <View style={{
                    backgroundColor: 'aqua',
                    flexBasis: 50, //flex basis can map the width or height depending on which is the primary axis
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}><Text style={{color: 'white'}}>Register</Text></View>
            </TouchableNativeFeedback>
        </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
            backgroundColor: 'grey',
            flex: 1,
        },
  });
  