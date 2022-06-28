import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Subcaption, Botton3, Botton1, RecentContacts, Avatar, Botton2, Botton4} from '../../Components/Widgets/Index';
import ade from '../../Assets/Images/ade.png';

const Lend =({navigation})=>{
    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1, flexDirection:'column', justifyContent:'space-between'}}>
           <View style={{marginTop:20, flexDirection:'column'}}>
               <View style={{flexDirection:'row', justifyContent:'center'}}>
               <Avatar
              image={ade}
              height={86}
              width={86}
              />
              <View style={{height:31, width:31, backgroundColor:'#FBD133', justifyContent:'center', borderRadius:360, marginTop:10, marginLeft:-15}}> 
                  <Text style={{fontSize:12, fontWeight:'600', textAlign:'center'}}>80</Text>
              </View>

               </View>
               <Subcaption
                label={'George Ndupu'}
                style={{color:'black', textAlign:'center', fontSize:20, fontWeight:'700', marginTop:10}}
             />
             <Subcaption
                label={'margaret@mail.com'}
                style={{color:'#666666', textAlign:'center', fontSize:13, fontWeight:'400', marginTop:3}}
             />

             <Subcaption
                label={'George is requesting a loan from you'}
                style={{color:'black', textAlign:'center', fontSize:17, fontWeight:'400', marginTop:10}}
             />
            
            <Subcaption
                label={'Review the terms and approve'}
                style={{color:'#666666', textAlign:'center', fontSize:13, fontWeight:'400', marginTop:3}}
             />

             <Subcaption
                label={'Pay Amount'}
                style={{color:'black', textAlign:'center', fontSize:17, fontWeight:'400', marginTop:10}}
             />

            <Subcaption
                label={'₦11,450.8'}
                style={{color:'#60A061', textAlign:'center', fontSize:40, fontWeight:'700', marginTop:5}}
             />
             <Subcaption
                label={'Tenure'}
                style={{color:'black', textAlign:'center', fontSize:17, fontWeight:'400', marginTop:5}}
             />

             <Subcaption
                label={'9 months'}
                style={{color:'#666666', textAlign:'center', fontSize:13, fontWeight:'400', marginTop:3}}
             />
              <Subcaption
                label={'Interest Rate'}
                style={{color:'black', textAlign:'center', fontSize:17, fontWeight:'400', marginTop:5}}
             />
             <Subcaption
                label={'10%'}
                style={{color:'#666666', textAlign:'center', fontSize:13, fontWeight:'400', marginTop:3}}
             />
             
             
              
           </View>

           <View style={{flexDirection:'column',marginLeft:15, marginRight:15}}>
           <Subcaption
                label={'Read terms and conditions'}
                style={{color:'#666666', textAlign:'center', fontSize:13, fontWeight:'400', marginBottom:10 }}
             />
               <View style={{flexDirection:'row'}}>
               <Botton4
               label={'Decline'}
               style={{marginRight:10}}
               onPress ={()=>{navigation.navigate('Decline')}}
               />
               <Botton1
               style={{marginRight:10}}
               label={'Lend'}
               onPress ={()=>{navigation.navigate('Payment')}}
               />

               </View>
           </View>
        </SafeAreaView>
    )
}
export default Lend