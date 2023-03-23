import { 
    SafeAreaView, StyleSheet, View, TouchableNativeFeedback, Text, Image
  } from 'react-native';
  
  export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                    backgroundColor: 'grey',
                    // alignSelf: 'flex-start'
                    justifyContent: 'center',
                    alignItems: 'center'
                    //flexShrink is not used as often but it informs views to shrink if there is an overflow
                    }}>

                <Image 
                fadeDuration={1000}
                resizeMode={'cover'}
                source={{
                    width: 460,
                    height: 600,
                    uri: "https://www.milgard.com/sites/default/files/styles/side_image/public/product-category/grid-image/content_block_700x500_tuscany01.jpg?itok=GHVWX1Ce"
                }}
                />
                <View style={{position: 'absolute', top: 10, alignItems: 'center',}}>
                    <Image 
                    fadeDuration={1000}
                    resizeMode={'contain'}
                    source={require('./assets/d-letter-logo.png')}
                    style={{width: 160, height: 160}}
                    />
                    <Text style={{ color: "red", fontSize: "16"}}>Done With It</Text>
                </View>
                    </View>
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
                    flexBasis: 60, //flex basis can map the width or height depending on which is the primary axis
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}><Text style={{color: 'white'}}>Login</Text></View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => console.log("You clicked the Register Button")}>
             <View style={{
                    backgroundColor: 'aqua',
                    flexBasis: 60, //flex basis can map the width or height depending on which is the primary axis
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}><Text style={{color: 'white'}}>Register</Text></View>
            </TouchableNativeFeedback>
        </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
            flex: 1,
        },
  });
  