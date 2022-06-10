import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Caption2, Input, Subcaption, Botton1} from '../../Components/Widgets/Index';



const ForgotPassword = ({navigation})=>{

    return(
        <View style={{flex:1, flexDirection:'row', backgroundColor:'white'}}>
       <SafeAreaView style={{marginTop:70, marginLeft:20, marginRight:20, marginBottom:20,  flexDirection:'column'}}>
            <Subcaption
            label={'Enter your email and will send you instruction on how to reset it'}
            style={{ fontSize:16, color:'#000000',textAlign:'left', fontWeight:'400'}}
            />

            <Text style={{color:'#666666', fontSize:17,marginTop:25}}>Email</Text>
            <Input
            style={{borderBottomWidth:1, flex:1, borderBottomColor:'#EFEFF4', padding:0, fontSize:17}}
            name={'Name'}
            placeholder={'jenny@mail.com'}
            placeholderTextColor={'#000000'}
            />
            <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Send'}
              onPress ={()=>{navigation.navigate('VerificationCode')}}
              
              />
          </View>
        </SafeAreaView>
        </View>
    )
}

export default ForgotPassword
