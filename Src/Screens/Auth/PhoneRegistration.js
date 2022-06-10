import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Caption2, Input, Subcaption, Botton1} from '../../Components/Widgets/Index';
import flag from '../../Assets/Icons/flag.png';



const PhoneRegistration = ({navigation})=>{

    return(
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
       <SafeAreaView style={{marginTop:70, marginLeft:20, marginRight:20, marginBottom:20,  flexDirection:'column'}}>
       <Caption2
       label={'Mobile Number'}
       style={{fontSize:45, fontWeight:'700', color:'black', marginBottom:10, textAlign:'center'}}
       />

       <Subcaption
       label={'Please enter your valid phone number. We will send you 4-digit code to verify account.'}
       style={{color:'#1C1939', fontSize:15, fontWeight:'400', textAlign:'center'}}
       />

       <View style={{ color:'#2C2948',alignItems:'center', borderRadius:10, flexDirection:'row', height:50, backgroundColor:'#F0F0F0', marginTop:50}}>
        <View style={{marginLeft:10}}>
            <Image  source={flag} style={{width:28, height:20}}/>
        </View>
        <View style={{marginLeft:5}}><Text style={{fontSize:17, fontWeight:'600'}}>+234 |</Text></View>
        <Input
            style={{ flex:1, borderBottomColor:'#EFEFF4', fontSize:17, letterSpacing:2, fontWeight:'600'}}
            name={'Name'}
            placeholder={'00 000 0000'}
            placeholderTextColor={'#000000'}
            />
       </View>

        
            <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Send Code'}
              onPress ={()=>{navigation.navigate('PhoneVerification')}}
              
              />
          </View>
          
        </SafeAreaView>
        </View>
    )
}

export default PhoneRegistration
