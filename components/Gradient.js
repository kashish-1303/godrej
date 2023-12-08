import { View, Text,Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Gradient = () => {
    return (
      <LinearGradient
        colors={['#68A722', '#88B330', '#9FBD41']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 ,borderRadius: 15, padding:10}}
      >
        {/* Your content goes here */}
       <View style={{flexDirection:'row'}}>
        <View style={{ flex: 1 }}>
           <Text style={{fontSize: 20, color:"#f3ffde", fontWeight:'bold'}} >
            Completed
           </Text>
          <Text style={{fontSize: 11, color:"#f3ffde",marginLeft:8}}>
            718 garden visits  and 12 goals.
          </Text>  
          <Text style={{fontSize: 11, color:"#f3ffde", paddingTop:10}}>
            Unlock the next level by achieving 10,000 garden visits
            and 50 targets.
          </Text>
         </View>
  
         <View >
         <Image
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            padding: 35,
            resizeMode: 'contain'
          }}
          source={require('../assets/star.png')}
        />
         </View>
         </View>
  
  
        
      </LinearGradient>
    );
  };
  
  export default Gradient;
  