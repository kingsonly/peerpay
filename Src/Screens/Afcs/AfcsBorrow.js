import React, { Component  } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { QrsmallCard, QrCard, Subcaption, BorrowFunds, Botton4, Botton1} from '../../Components/Widgets/Index';
import borrow from '../../Assets/Images/borrowfunds.png';
const AfcsBorrow =({navigation})=>{


    return(
        <View style={{flexDirection:'row', backgroundColor:'white', flex:1, justifyContent:'center'}}>
            <ScrollView style={{marginTop:30,flexDirection:'column'}}>
            <BorrowFunds
            image={borrow}
            label={'You’re about to borrow'}
            amount={'₦11,785'}
           
            />
             <Subcaption
                 label={'We will send your request and you will receive an in-app notification once your request hav been processed'}
                 style={{color:'#1C1939', fontSize:15, marginLeft:10, marginRight:15, marginTop:15, lineHeight:25, fontWeight:'200'}}
                />

            <View style={{ marginTop:50,flexDirection:'row', justifyContent:'space-between'}}>
               
             <Botton4
             label={'Inform Lender'}
             style={{marginLeft:15, marginRight:15}}
             onPress ={()=>{navigation.navigate('Borrow')}}

             />
             <Botton1
             label={'Scan QR'}
             style={{marginLeft:15, marginRight:15}}
             onPress ={()=>{navigation.navigate()}}
             />
            </View>
            </ScrollView>
            
        </View>
    )
}

export default AfcsBorrow;