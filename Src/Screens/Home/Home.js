import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IdCard from '../Auth/IdCard';
import { Caption2, Input, Subcaption, Botton1, Avatar, Icon} from '../../Components/Widgets/Index';
import dashboardimage from '../../Assets/Icons/dashboard.png';
import request from '../../Assets/Icons/request.png';
import afcsicon from '../../Assets/Icons/afcsicon.png';
import qr from '../../Assets/Icons/qr.png';
import profile from '../../Assets/Icons/portfolio.png';
import Dashboard from '../../Components/Layouts/Dashboard.js';
import Request from '../Request/Request.js';
import Poc from '../Afcs/Poc';
import Qr from '../QrCode/Qr.js';
import Afcs from '../Afcs/Afcs.js';
import Portfolio from '../Portfolio/Portfolio.js';
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

<Tab.Screen 
     name="Requests"
     component={Request}
     options={{
      headerShown: true,
       tabBarIcon: ({ color, size }) => (
         <Icon image={request} name="home"  size={size}  />
       ),
     }}
      />

    <Tab.Screen 
     name="QR Pay"
     component={Qr}
     options={{
      headerShown: false,
       tabBarIcon: ({ color, size }) => (
         <Icon image={request} name="home"  size={size}  />
       ),
     }}
      />

<Tab.Screen 
     name="AFCS"
     component={Afcs}
     options={{
      headerShadowVisible:true,
      headerShown: true,
       tabBarIcon: ({ color, size }) => (
         <Icon image={afcsicon} name="home"  size={size}  />
       ),
     }}
      />
      

<Tab.Screen 
     name="Portfolio"
     component={Portfolio}
     options={{
      headerShown: false,
       tabBarIcon: ({ color, size }) => (
         <Icon image={profile} name="home"  size={size}  />
       ),
     }}
      />


      
      
    </Tab.Navigator>
    )
}

export default Home
