import React, {Component, useContext} from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import {UserProvider, UserContext} from '../../../Global/UserContext';
import Mask from '../../Assets/Images/Mask.png';
import {Botton1, Botton2, Caption, Skip, Tc} from '../../Components/Widgets/Index';

const Onboarding = ({navigation}) => {
  const {isAuthenticated, setIsAuthenticated, userData, setUserDate} =
    useContext(UserContext);
    const redirect = () => {
      setTimeout(() => {
            navigation.navigate('Onboarding2') 
       },3000);
  }
  redirect()

  return (
    <ImageBackground source={Mask} style={{width: '100%', height: '100%'}}>
      <>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Skip />
          <Caption
          label ={'Credible financial commitments for credit & loan security'}
          style={{fontSize:25, fontWeight:'600'}}
          />

          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Botton1
              label = {'Sign Up'}
              onPress={()=>{navigation.navigate('Signup')}}
              style={{margin:10}}
              />
              <Botton2
              label = {'Sign In'}
              style={{margin:10}}
              onPress={()=>{navigation.navigate('Login')}}
              />
            </View>

            <Tc
            />
          </View>
        </SafeAreaView>
      </>
    </ImageBackground>
  );
};

export default Onboarding;
