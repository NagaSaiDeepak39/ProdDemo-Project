
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  ImageBackground
} from 'react-native';
import bg from './assests/bg.png'
 

export default class CoverScreen extends Component {
    state = {
      animation: new Animated.Value(0),
    
    };
    componentDidMount  () {
      this.state.animation.setValue(0);
     
      Animated.timing(this.state.animation, {
        duration: 1500,
        toValue: 1,
      }).start(( ) => {
       
              this.props.navigation.navigate('Login')
      
      });
    };
        
        render() {
            const progressInterpolate = this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            });

        const progressStyle = {
            width: progressInterpolate,
            bottom: 0,
            backgroundColor: 'white',
          };

    return(
        <View  style={{flex:1,flexDirection:'column'}}>
<ImageBackground source={bg} style={styles.image}>

<View style={{
   position:'absolute',left:'30%',top:'20%'}}>

        <Text style={styles.textSubHeading}>
           Wall Board
       </Text>

       </View>

<View style={{backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    paddingVertical: 2,
    overflow: "hidden",marginBottom:20}}>
         <Animated.View style={[styles.progress, progressStyle]} />
       </View>
       <View style={{
    alignItems: "center",
    justifyContent: "center",
    marginTop:20}}>

        <Text style={styles.textHeading}>
           LOADING
       </Text>

       </View>
       
    </ImageBackground>

        </View>
        
    )
}

}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
     
    
    textHeading:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:14,
        lineHeight:16,
        color:'white'
    },
    textSubHeading:{
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontSize:35,
        // lineHeight:20,
        color:'white'
    },
 
    progress: {
        position: "absolute",
        left: 0,
        top: 0,
      },


})
