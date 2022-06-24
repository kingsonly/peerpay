import React, { Component, useState, useContext } from 'react';
import { View, Text, Image} from 'react-native';
import logo from '../Assets/Images/logo-white.png'
import {UserProvider, UserContext} from '../../Global/UserContext';

  const Splash = ({ navigation }) => {
   const{isAuthenticated, setIsAuthenticated, userData, setUserDate, firstTime, setFirstTime} = useContext(UserContext)
   const redirect = () => {
    setTimeout(() => {
          //navigation.navigate('Onboarding') 
          navigation.navigate('Home') 
     },4000);
}  
   if(firstTime){
    redirect()
   }else{
     navigation.navigate('Login') 
   }
    

  
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Image source={logo}  style={{ height:69.74, width:250}}/>
    </View>
    )
  }
export default Splash;
