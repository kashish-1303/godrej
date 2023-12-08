import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  HomeIcon,
  CpuChipIcon,
  ClockIcon,
  UserIcon
} from 'react-native-heroicons/outline';

import HomeScreen from './screen/HomeScreen';
import Leads from './screen/Leads';
import Planner from './screen/Planner';
import Farmer from './screen/Farmer';

const homeName = 'Home';
const leadsName = 'Leads';
const plannerName = 'Planner';
const farmerName = 'Farmer';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <HomeIcon
                name={focused ? 'home' : 'HomeIcon'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={leadsName}
          component={Leads}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <CpuChipIcon
                name={focused ? 'leads' : 'CpuChipIcon'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={plannerName}
          component={Planner}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <ClockIcon
                name={focused ? 'planner' : 'ClockIcon'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={farmerName}
          component={Farmer}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <UserIcon
                name={focused ? 'farmer' : 'UserIcon'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
