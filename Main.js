/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,Image,FlatList,Dimensions, TouchableOpacity,Easing,ImageBackground      
} from 'react-native';

import home from './assests/home.png'
import summary from './assests/planning.png'
import settings from './assests/settings.png'
import menu from './assests/menu.png'

import bg from './assests/bg.png'



const DATA = [
  {
    id:1,
    mainText:'TXS',
    subText:'TX Sales',
    text1:'SLA',
    text2:'AWT',
    text3:'HWT',
    text4:'Pending',
    number1:'15',
    number2:'25',
    number3:'15',
    number4:'02',
    color:'#E47735'
  },
  { 
    id:2,
    mainText:'TXC',
    subText:'TX Care',
    text1:'SLA',
    text2:'AWT',
    text3:'HWT',
    text4:'Pending',
    number1:'16',
    number2:'11',
    number3:'15',
    number4:'02',
    color:'#337FF9'
  },
  { 
    id:3,
    mainText:'NES',
    subText:'NE Sales',
    text1:'SLA',
    text2:'AWT',
    text3:'HWT',
    text4:'Pending',
    number1:'16',
    number2:'11',
    number3:'15',
    number4:'02',
    color:'#30AF67'
  },
  { 
    id:4,
    mainText:'NEC',
    subText:'NE Care',
    text1:'SLA',
    text2:'AWT',
    text3:'HWT',
    text4:'Pending',
    number1:'16',
    number2:'11',
    number3:'15',
    number4:'02',
    color:'#FF5E5B'
  }
]

export default class Main extends Component {

  state = {

   
  };

  headerBar =()=>{

    return(
     
                   <SafeAreaView style={{height:'5%',padding:16,marginBottom:15,colors:'white'}}>
                 
                 <View style={{paddingHorizontal:5}}>
                    
                     <Image
                     source={menu}
                     style={{height:20,width:20,marginRight:'12%',}}
                     resizeMode='contain'
                     />

                    <View style={{marginTop:-28 }}>
                     <Text style={{fontSize:23,fontWeight:'bold',textAlign:'center',fontFamily:'SF Pro Display',color:'#18466A'}}>
                     Gexa
                     </Text>
                     </View>

                </View>

                    
                     
 
                    
                
 
           </SafeAreaView>
       
 
    )
 }



   renderItem = ({ item }) => (
    
    <TouchableOpacity
    onPress={()=>{
      this.props.navigation.navigate('Details')
    }}
    style={{backgroundColor:'white',padding:10,marginHorizontal:20,
    marginBottom:30,height:'55%',borderRadius:30,flex:1}}>
    <View style={{flexDirection:'row'}}>
        <View
          style={{width:60,
          height:60,
          borderRadius:60,
        backgroundColor:item.color,justifyContent:'center',
      alignContent:'center',marginRight:20}}
        >
        <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>{item.mainText}</Text>
        </View>

        <View style={{flexDirection:'column'}}>
            <View style={{marginBottom:8}}>
              <Text style={{color:item.color}}>{item.subText}</Text>
            </View>
            <View style={{flexDirection:'row'}}>

              <View style={{flexDirection:'column',marginRight:35}}>
              <Text>
                {item.text1}
              </Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>
                {item.number1}
              </Text>
              </View>

              <View style={{flexDirection:'column',marginRight:35}}>
              <Text>
              {item.text2}
              </Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>
              {item.number2}
              </Text>
              </View>

              <View style={{flexDirection:'column',marginRight:35}}>
              <Text>
              {item.text3}
              </Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>
              {item.number3}
              </Text>
              </View>

              <View style={{flexDirection:'column',marginRight:10}}>
              <Text>
              {item.text4}
              </Text>
              <Text style={{fontWeight:'bold',textAlign:'center'}}>
              {item.number4}
              </Text>
              </View>

            </View>
        </View>
    </View>
</TouchableOpacity>


  );

  render(){
    


    return(

      <View style={{flex:1}}>

     {this.headerBar()}
   
      <ImageBackground source={bg} style={styles.image}>

      

          <View>
            <Text style={{color:'white',fontSize:20,padding:20,marginLeft:10}}>
              Queue KPI
            </Text>
          </View>

          <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
       
      />


          <View style={{position:'absolute',left:0,bottom:0,width:width}}>
      
      <View style={{
        flexDirection:'row',justifyContent:'space-evenly',paddingHorizontal:10,
        height:56
        
      }}>

        <TouchableOpacity style={{flexDirection:'column',width:width*0.42, justifyContent:'center',
      alignItems:'center'}}

      >
   <>
   <Image
           style={{height:25,width:25,marginBottom:8}}
           source={summary}
         />
         <Text style={styles.textNrml}>
           SUMMARY
         </Text>
    </>
   </TouchableOpacity>

      
      <View style={{flexDirection:'column',width:width*0.42, justifyContent:'center',
    alignItems:'center'}}>
      <TouchableOpacity

    style={{justifyContent:'center',alignItems:'center'}}>
      
   <Image
           style={{height:25,width:25,marginBottom:8}}
           source={home}
           resizeMode='contain'
         />
         <Text style={styles.textNrml}>
           Home
         </Text>
        
         </TouchableOpacity>
    </View>
  
        <View style={{flexDirection:'column',width:width*0.42, justifyContent:'center',
    alignItems:'center'}}>
      <TouchableOpacity

    style={{justifyContent:'center',alignItems:'center'}}>
      
   <Image
           style={{height:25,width:25,marginBottom:8}}
           source={settings}
           resizeMode='contain'
         />
         <Text style={styles.textNrml}>
           SETTINGS
         </Text>
        
         </TouchableOpacity>
    </View>

 </View>
 </View>

 

     
      
       
   </ImageBackground>
      
    </View>
    )

   

  }

}
const {height,width}= Dimensions.get("window")




const styles = StyleSheet.create({
 


  textNrml:{
    fontFamily:'Roboto',
    fontWeight:'normal',
    fontSize:12,
    lineHeight:14,
    textAlign:'center',
    color:'white'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
});

