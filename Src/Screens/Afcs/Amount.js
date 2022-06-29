import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Subcaption, Botton3, Botton1, RecentContacts, Avatar, Botton2, Botton4, Input, Onscreenkeyboard} from '../../Components/Widgets/Index';
import ade from '../../Assets/Images/ade.png';


const Amount =({navigation})=>{
    return(
        
            
                <SafeAreaView style={{ backgroundColor:'#ffffff', flex:1, flexDirection:'column', justifyContent: 'space-between'}}>
                <View style={{marginLeft:15, marginRight:15}}>
                  <Subcaption
                  label={'Amount'}
                  style={{color:'#000000', textAlign:'left', fontSize:15, fontWeight:'600',marginTop:10}}
                  />

                  <Input
                   style={{ fontWeight:'600', textAlign:'center', backgroundColor:'#EFEFF4', marginTop:10, width:'100%', color:'#000000'}}
                   name={'mobile'}
                   placeholder={'11,785'}
                   placeholderTextColor={'#000000'}
                   // onChangeText={}
                   //value={mobile}
                   secureTextEntry={false}
                   required
                  />

                  <Onscreenkeyboard/>
                </View>


                <View style={{flexDirection:'row', marginLeft:15, marginRight:15}}>
            
            <Botton1
            style={{marginRight:10}}
            label={'Confirm'}
            onPress ={()=>{navigation.navigate('poc')}}
            />

            </View>

            </SafeAreaView>
        
        
    )

}
export default Amount;