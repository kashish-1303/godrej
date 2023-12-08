import { View, Text ,Image,ScrollView} from 'react-native'
import React,{ useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    MagnifyingGlassIcon,
    BellIcon,
    ListBulletIcon,
    MapPinIcon,
  } from "react-native-heroicons/outline";
import Gradient from '../../components/Gradient';
import FeaturedRow from '../../components/FeaturedRow';
import FeaturedRow2 from '../../components/FeaturedRow2';
import FeaturedRow3 from '../../components/FeaturedRow3';
import FeaturedRow4 from '../../components/FeaturedRow4';


  const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    return (
      <SafeAreaView style={{ backgroundColor: "#f7f7f9", padding: 5 }}>
        {/* Header */}
        <View style={{ flexDirection: "row", padding: 5 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../assets/godrej-agrovet-limited-logo.png")}
              style={{ width: "50%", height: 40, resizeMode: "contain" }}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <MagnifyingGlassIcon
              size={30}
              color="#36454F"
              style={{ marginRight: 10 }}
            />
            <BellIcon size={30} color="#36454F" style={{ marginRight: 10 }} />
            <View>
              <Image
                source={require("../../assets/pfp.jpg")}
                style={{ width: 30, height: 30, borderRadius: 50 }}
              />
            </View>
          </View>
        </View>
        {/* Body */}
      <View>
      <ScrollView 
      style={{ padding: 5 }}>
        <View style={{ padding: 5 }}>
          <Gradient />
        </View>
        {/* Featured Rows */}
        <View
          style={{ flexDirection: "row", justifyContent: "center", padding: 5 }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Today's Schedule
            </Text>
          </View>
          <Text style={{ fontSize: 11 }}>View all</Text>
        </View>

        <FeaturedRow />

        <View
          style={{ flexDirection: "row", justifyContent: "center", padding: 5 }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Today's Schedule
            </Text>
          </View>
          <Text style={{ fontSize: 11 }}>View all</Text>
        </View>
        <FeaturedRow2 />

        <View
          style={{ flexDirection: "row", justifyContent: "center", padding: 4,marginBottom:-10 }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>News Feed</Text>
          </View>
          <Text style={{ fontSize: 11 }}>View all</Text>
        </View>

        <ScrollView contentContainerStyle={{
          paddingHorizontal:1,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
        <View style={{ flexDirection: "row"}}>
        <FeaturedRow3
        title="All" />
        <FeaturedRow3 
        title="Crop"/>
        <FeaturedRow3 
        title="Weather"/>
        <FeaturedRow3 
        title="Technology"/>
        </View>
      </ScrollView>

      <FeaturedRow4/>

        
      </ScrollView>
      </View>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
