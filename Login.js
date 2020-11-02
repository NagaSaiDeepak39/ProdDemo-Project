
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,ImageBackground,ToastAndroid,TouchableOpacity
} from 'react-native';
import bg from './assests/bg.png'
import { Input } from 'react-native-elements';
import User from './assests/user.png'
import Lock from './assests/lock.png'

export default class Login extends Component {
    state = {
     username:'',
     password:''
    };

    signIn_handler=()=>{

        if((this.state.username.toLowerCase()==='admin')&&(this.state.password.toLowerCase()==='admin')){
           
            this.props.navigation.navigate('Main')
        }
        else{
            
            ToastAndroid.showWithGravity('User Name and Password is not correct',ToastAndroid.SHORT,
            ToastAndroid.BOTTOM)
        }
    }
   
        // console.log('entered into actions')
        render() {
            
    return(
        <View  style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
<ImageBackground source={bg} style={styles.image}>

<View style={{paddingHorizontal:'28%',marginTop:-60,marginBottom:60}}>

        <Text style={styles.textSubHeading}>
           Wall Board
       </Text>

       </View>

        <View style={{paddingHorizontal:50}}>

            <Input
    placeholder='User Name'
    placeholderTextColor='white'
    onChangeText={(value)=>{
        this.setState({
            username:value
        })
    }}
    leftIcon={
        <Image
        source={User}
        size={24}
        
        />
        }
        />

    <Input
    placeholder='Password'
    placeholderTextColor='white'
    onChangeText={(value)=>{
        this.setState({
            password:value
        })
    }}
    leftIcon={
        <Image
        source={Lock}
        size={24}
        
        />
        }
        />
        <View style={{marginLeft:"60%"}}>
        <Text style={{color:'white'}}>
            Forgot Password?
        </Text>
        </View>

        <TouchableOpacity 
        onPress={this.signIn_handler}
        style={{width:145,height:60,borderRadius:20,backgroundColor:'#442C99',borderWidth:2,borderColor:'white',alignItems:'center',justifyContent:'center',marginLeft:'25%',marginTop:'20%'}}>
            <Text style={{color:'white'}}>
                SIGNIN
            </Text>
        </TouchableOpacity>
        
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
    
    textSubHeading:{
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontSize:35,
        // lineHeight:20,
        color:'white'
    },


})
