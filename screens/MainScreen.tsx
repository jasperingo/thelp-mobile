
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import Colors from '../assets/colors.json';
import Dimensions from '../assets/dimensions.json';

export type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: Dimensions.xLarge,
          fontFamily: 'RubikMoonrocks-Regular'
        },
        headerTintColor: Colors.colorOnPrimary,
        tabBarActiveTintColor: Colors.colorOnPrimary,
        tabBarInactiveTintColor: Colors.colorOnPrimary,
        tabBarLabelStyle: {
          marginBottom: Dimensions.xSmall
        },
        tabBarStyle: { height: 60 },
      }}
      >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'Thelp',
          tabBarIcon: ({ color, size, focused })=> <Icon name={ focused ? 'home' : 'home-outline' } color={color} size={size} />
        }}
        />

      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ 
          tabBarIcon: ({ color, size, focused })=> <Icon name={ focused ? 'person' : 'person-outline' } color={color} size={size} />
        }}
        />
    </Tab.Navigator>
  );
}

export default MainScreen;
