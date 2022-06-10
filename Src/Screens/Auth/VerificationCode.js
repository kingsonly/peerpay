import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Caption2, Input, Subcaption, Botton1} from '../../Components/Widgets/Index';



const VerificationCode = ({navigation})=>{

    return(
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
       <SafeAreaView style={{marginTop:70, marginLeft:20, marginRight:20, marginBottom:20,  flexDirection:'column'}}>
       <Caption2
       label={'Verify your email'}
       style={{fontSize:49, fontWeight:'700', color:'black', marginBottom:10, textAlign:'left'}}
       />

       <Subcaption
       label={'We’ve sent your verification code to +32 8304 5321'}
       style={{color:'#666666', fontSize:16, fontWeight:'400', textAlign:'left'}}
       />

            <Text style={{color:'#666666', fontSize:17,marginTop:25}}>Enter Code</Text>
            <Input
            style={{borderBottomWidth:1, flex:1, borderBottomColor:'#EFEFF4', padding:0, fontSize:17}}
            name={'Name'}
            placeholder={'3993'}
            placeholderTextColor={'#000000'}
            />
            <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Verify'}
              onPress ={()=>{navigation.navigate('PhoneRegistration')}}
              
              />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
              <View >
                  <Text style={{}}>Resend code</Text>
              </View>
              <View>
                  <Text style={{color:'#666666'}}>1:20 min left</Text>
              </View>

          </View>
        </SafeAreaView>
        </View>
    )
}

export default VerificationCode
