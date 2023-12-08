import { View, Text } from 'react-native'
import React from 'react'
import { ListBulletIcon, MapPinIcon } from "react-native-heroicons/outline";

const FeaturedRow = () => {
    return (
      <View style={{ flexDirection: "row", padding: 5, alignContent: "center" }}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#d8d5f4",
            marginRight: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", padding: 5, alignContent: "center" }}
          >
            <ListBulletIcon
              size={20}
              color="#000000"
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontSize: 15, color: "#000000", fontWeight: "bold" }}>
              Task 1
            </Text>
          </View>
          <Text style={{ fontSize: 13, marginLeft: 4 }}>
            Conduct harvest survey at Field ID001
          </Text>
        </View>
  
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#eaf6d2",
            marginLeft: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", padding: 5, alignContent: "center" }}
          >
            <MapPinIcon size={20} color="#000000" style={{ marginRight: 8 }} />
            <Text style={{ fontSize: 15, color: "#000000", fontWeight: "bold" }}>
              Task 2
            </Text>
          </View>
          <Text style={{ fontSize: 13, marginLeft: 4 }}>
            Evaluate effects of flood in Eluru District
          </Text>
        </View>
      </View>
    );
  };
  
  export default FeaturedRow;
  