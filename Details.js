
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,Dimensions,ImageBackground,FlatList,TouchableOpacity
} from 'react-native';
import bg from './assests/bg.png'
import phone from './assests/phone.png'
import phoneCall from './assests/phoneCall.png'
import schedule from './assests/schedule.png'
import note from './assests/note.png'
import user from './assests/phone.png'
import avatar from './assests/menu.png'
import fav from './assests/fav.png'
import home from './assests/home.png'
import summary from './assests/planning.png'
import settings from './assests/settings.png'

const DATA = [
        {   
            id:1,
            img: phone ,
            subText:'3/0',
            Text:'In Queue / MWT'
        },
        {   
            id:2,
            img: phoneCall,
            subText:'8/0',
            Text:'Answered / ATT'
        },
        {   
            id:3,
            img: schedule,
            subText:'15/07',
            Text:'Schedule / OOC'
        },
        {   
            id:4,
            img: note,
            subText:'12/20',
            Text:'SLA / AWT'
        },
        {   
            id:5,
            img: user,
            subText:'15/20',
            Text:'On call / Idle'
        }
]



export default class Details extends Component {
    state = {

    };
   
    
  headerBar =()=>{

    return(
     
                   <SafeAreaView style={{height:'5%',padding:16,marginBottom:15,colors:'white'}}>
                 
                 <View style={{paddingHorizontal:5}}>
                    
                     <Image
                     source={avatar}
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
    
        <View style={{backfaceVisibility:'visible',padding:10,marginHorizontal:20
        ,flex:1,marginBottom:15}}>
        <View style={{flexDirection:'row'}}>
           
            <View style={{marginRight:30,marginTop:10}}>
                <Image
                source={item.img}
                style={{width:40,
                height:40}}
                />
            </View>

            <View style={{flexDirection:'column'}}>
                <View>
                  <Text style={{color:'#84B91B',fontSize:20}}>{item.subText}</Text>
                </View>
                
                <View>
                <Text style={{color:'white',fontSize:20}}>{item.Text}</Text>
                </View>
           </View>

        </View>
        </View>
    
    
      );

   
       
        render() {
            
    return(
        <View  style={{flex:1,flexDirection:'column'}}>
              {this.headerBar()}
    <ImageBackground source={bg} style={styles.image}>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:30,paddingVertical:20}}>
        <View>
            <Text style={{fontSize:35,fontWeight:'bold',color:'#9670D5'}}>
            TX Sales
            </Text>
        </View>
        <View>
            <Image
            source={fav}
            style={{
                width:25,
                height:25,
                marginTop:6
            }}
            />
        </View>
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
const {width}= Dimensions.get("window")


const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    
    
      textNrml:{
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontSize:12,
        lineHeight:14,
        textAlign:'center',
        color:'white'
      },
})
