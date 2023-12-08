import { View, Text ,ScrollView,Image} from 'react-native'
import React from 'react'

const FeaturedRow4 = () => {
    return (
      <ScrollView
          contentContainerStyle={{
            paddingHorizontal:1,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          <View style={{ flexDirection: "row", padding:10}}>
              <Image
                source={require("../assets/farm1.jpg")}
                style={{ width: 190, height: 150, borderRadius: 8 ,marginRight:15}}
              />
              <Image
                source={require("../assets/farm2.jpg")}
                style={{ width: 190, height: 150, borderRadius: 8,marginRight:15 }}
              />
          </View>
        </ScrollView>
  );
};

export default FeaturedRow4;