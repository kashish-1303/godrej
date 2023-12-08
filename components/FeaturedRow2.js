import { View, Text,Image } from 'react-native'
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline'

const FeaturedRow2 = () => {
    return (
  <View>
  <View style={{ borderRadius: 10, backgroundColor:"#cfebff",padding:10}}>
      <View style={{flexDirection:'row'}}>
      <Image
          source={require('../assets/layout_vector_icon.png')}
          style={{width: 18,
          height: 18,
          resizeMode: 'contain',
          }}
          />
      <Text style={{fontSize: 10, color:"#000000", fontWeight:'bold',padding:2,marginRight:8}} >FID12</Text>
  
      <Image
          source={require('../assets/layout_vector_icon.png')}
          style={{width: 18,
          height: 18,
          resizeMode: 'contain',
          }}
          />
      <Text style={{fontSize: 10, color:"#000000", fontWeight:'bold',padding:2,marginRight:8}} >FID13</Text>
  
      <Image
          source={require('../assets/layout_vector_icon.png')}
          style={{width: 18,
          height: 18,
          resizeMode: 'contain',
          }}
          />
      <Text style={{fontSize: 10, color:"#000000", fontWeight:'bold',padding:2}} >FID14</Text>
      </View>
  
      <Text style={{fontSize: 11, color:"#556a78",padding:5}} >Conduct field visits</Text>
  
      <View style={{flexDirection:'row',padding:5, alignContent:'center'}}>
      <MapPinIcon size={18} color='#647179' style={{marginRight:4}} />
      <Text style={{fontSize: 12, color:"#556a78"}} >NDA Road, Pune</Text>
      </View>
  
  </View>
  <View style={{padding:5, marginTop:8}}>
  <Image
          source={require('../assets/annual_report.jpg')}
          style={{width: '100%',
          height: 80,
          borderRadius: 10,
          
          }}
          />
  
  </View>
  </View>
  
  
  
  
    );
  };
  
  export default FeaturedRow2;