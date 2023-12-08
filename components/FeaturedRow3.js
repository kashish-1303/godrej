import { View, Text,TouchableHighlight,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const FeaturedRow3 = ({title}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
      setIsPressed(!isPressed);
    };  
    return (
      <View style={{ marginTop: 20 }}>
        <TouchableHighlight
          onPress={handlePress}
          style={{flex: 1,
            height: 30,            
            marginHorizontal: 6,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: isPressed ? '#849a47' : 'transparent',
            borderColor: isPressed ? '#849a47' : '#849a47',}}
          // marginRight:10}}
        >
          <Text style={{fontSize: 12,padding:4,fontWeight:"600",color: isPressed ? '#fff' : '#849a47',marginRight:20,marginLeft:20}}>
            {title}</Text>
        </TouchableHighlight>
      </View>

  )
}

export default FeaturedRow3;