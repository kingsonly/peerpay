import React, {Component, useContext} from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import {UserProvider, UserContext} from '../../../Global/UserContext';
import Mask from '../../Assets/Images/Mask5.png';
import {Botton1, Botton2, Caption, Skip, Tc, CurrentSatge, Left} from '../../Components/Widgets/Index';

const Onboarding5 = ({navigation}) => {
  const {isAuthenticated, setIsAuthenticated, userData, setUserDate} =
    useContext(UserContext);
   

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
              <View></View>
          {/* <Skip /> */}
          <Caption
          label ={'Automated repayment execution'}
          style ={{ alignItems:'flex-start', justifyContent:'flex-end', fontSize: 43, fontWeight:'800', textAlign:'left'}}
          />
          <View style={{flexDirection:'row', marginTop:50}} >
           <CurrentSatge
           label={'05 '}
           />
           <Left
           label ={'/ 05'}
           />
          </View>
          <View style={{flexDirection:'row', marginTop:25}}>
            <View style={{height:1, width:'50%', backgroundColor:'#FF9500'}}></View>
            <View style={{height:1, width:'50%', backgroundColor:'#8A8A8F'}}></View>
          </View>

          <View
            style={{alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Botton1
              label = {'Get Started'}
              onPress={()=> navigation.navigate('Login')}
              />
              
            </View>
          </View>
        </SafeAreaView>
      </>
    </ImageBackground>
  );
};

export default Onboarding5;
