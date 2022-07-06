import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Subcaption, Botton3, Botton1, RecentContacts} from '../../Components/Widgets/Index';
import add from '../../Assets/Icons/Add.png';
import jane from '../../Assets/Images/jane.png';

const Borrow =({navigation})=>{
    return(
        <SafeAreaView style={{ marginLeft:20, marginRight:20,flex:1, flexDirection:'column', justifyContent:'space-between'}}>
            <View>
             <Subcaption
             label={'Borrow From'}
             style={{color:'black', textAlign:'left', fontSize:17, fontWeight:'600', marginTop:10}}
             />

          <View style={{ marginTop:10,flexDirection:'row', justifyContent:'space-between'}}>
               <Botton3
               label={'Choose Lender'}
               onPress ={()=>{navigation.navigate('Borrow')}}
               icon={add}
               
               /> 
              </View>  

              <View>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Subcaption
                label={'Recent Contacts'}
                style={{color:'black', textAlign:'left', fontSize:17, fontWeight:'600', marginTop:10}}
             />

             <Subcaption
                label={'Clear'}
                style={{color:'#FF2D55', textAlign:'left', fontSize:11, fontWeight:'600', marginTop:10}}
                
             />

              </View>

            <ScrollView horizontal={true} >
            <RecentContacts
            
             image={jane}
             label={'Amber Julia'}   
             />
            </ScrollView>
              </View>
            </View>


            <View style={{ marginTop:10,flexDirection:'row', justifyContent:'space-between'}}>
               <Botton1
               label={'Borrow'}
               onPress ={()=>{navigation.navigate('Lend')}}
               
               
               /> 
              </View>
           

           
        </SafeAreaView>
    )
}


export default Borrow