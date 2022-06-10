import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IdCard from '../Auth/IdCard';
import { Caption2, Input, Subcaption, Botton1, Avatar, Icon} from '../../Components/Widgets/Index';
import dashboardimage from '../../Assets/Icons/dashboard.png';
import Dashboard from '../../Components/Layouts/Dashboard.js';
const Tab = createBottomTabNavigator();



const Home = ({navigation})=>{

    return(
        <Tab.Navigator
        initialRouteName="Dash board"
      screenOptions={{
        tabBarActiveTintColor: '#60A061',
      }}>
      <Tab.Screen 
     name="Dashboard"
     component={Dashboard}
     options={{
      headerShown: false,
       tabBarIcon: ({ color, size }) => (
         <Icon image={dashboardimage} name="home"  size={size}  />
       ),
     }}
      />


      
      
    </Tab.Navigator>
    )
}

export default Home
