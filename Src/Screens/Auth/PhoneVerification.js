import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image , TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Caption2, Input, Subcaption, Botton1} from '../../Components/Widgets/Index';
import flag from '../../Assets/Icons/flag.png';



const PhoneVerification = ({navigation})=>{
   const inputs = Array(4).fill('')
    return(
        <KeyboardAvoidingView style={{flex:1, flexDirection:'column', backgroundColor:'white', justifyContent:'space-between'}}>
       <SafeAreaView style={{marginTop:70, marginLeft:20, marginRight:20, marginBottom:20,  flexDirection:'column'}}>
       <Caption2
       label={'Verify Account!'}
       style={{fontSize:45, fontWeight:'700', color:'black', marginBottom:10, textAlign:'center'}}
       />

       <Subcaption
       label={'Enter 4-digit Code code we have sent to at +0 000 000 0000.'}
       style={{margin:15, color:'#1C1939', fontSize:15, fontWeight:'400', textAlign:'center'}}
       />
      <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:40}}> 
        
      {
           inputs.map((inp, index) => {
               return <Input key={index.toString()}
               style={{textAlign:'center', padding:0, paddingLeft:15,paddingRight:15, paddingBottom:15, borderBottomWidth: 2, borderBottomColor:'#60A061', fontSize:30,  fontWeight:'400'}}
               name={'Name'}
               placeholder={'0'}
               placeholderTextColor={'#000000'}
               keyboardType ={'numeric'}
               maxLength={1}
               />
           })
       }

      </View>
          

       <Subcaption
       label={'Didn’t not received the code?'}
       style={{color:'#1C1939', fontSize:15, fontWeight:'400', textAlign:'center', marginTop:15}}
       />
        <TouchableOpacity >
        <Subcaption
       label={'Resend code'}
       style={{color:'#60A061', fontSize:18, fontWeight:'600', textAlign:'center', marginTop:10}}
       />
        </TouchableOpacity>
       

        
           
          
        </SafeAreaView>

        <SafeAreaView style={{ marginLeft:20, marginRight:20, marginBottom:20,  flexDirection:'column'}}>
        <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Proceed'}
              onPress ={()=>{navigation.navigate('IdCard')}}
              
              />
          </View>
          <Subcaption
       label={'by clicking start, you agree to our Privacy Policy our Teams and Conditions'}
       style={{ margin:10, color:'#1C1939', fontSize:13, fontWeight:'400', textAlign:'center', marginTop:15}}
       />
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default PhoneVerification
