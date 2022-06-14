import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Caption, RequestCard, SmallBotton, Subcaption} from '../Widgets/Index';
import james from '../../Assets/Images/james.png';
import jane from '../../Assets/Images/jane.png';
import simon from '../../Assets/Images/simon.png';

const Inbox =()=>{
    return(
        <>
        <ScrollView horizontal={true} style={{marginTop:10, backgroundColor:'#F5F5F5', flex:1, flexDirection:'row', }}>
           <SmallBotton
           label={'All Request'}
           style={{backgroundColor:'#60A061', color:'white'}}
           />

          <SmallBotton
           label={'Pending'}
           style={{backgroundColor:'#EFEFF4', color:'#666666'}}
           />

           <SmallBotton
           label={'Completed'}
           style={{backgroundColor:'#EFEFF4', color:'#666666'}}
           />

          <SmallBotton
           label={'Live'}
           style={{backgroundColor:'#EFEFF4', color:'#666666'}}
           />

         <SmallBotton
           label={'Rejected'}
           style={{backgroundColor:'#EFEFF4', color:'#666666'}}
           />


        </ScrollView>

        <View style>
            <Subcaption
            label={'This Week'}
            style={{textAlign:'left', color:'black', fontSize:17, fontWeight:'700', marginTop:10, marginLeft:3}}
            />

            <RequestCard
            image={james}
            label1={'James Ikenna'}
            label2={'+2345445676'}
            label3={'₦5,000'}
            label4={'1 installment'}
            status={'Pending'}
            style={{backgroundColor:'#FF9500', color:'white'}}
            />

           <RequestCard
            image={jane}
            label1={'Jane Olayinka'}
            label2={'+2345445676'}
            label3={'₦5,000'}
            label4={'3 installment'}
            status={'Rejected'}
            style={{backgroundColor:'#FF2D55', color:'white'}}
            />

            <RequestCard
            image={jane}
            label1={'Jane Olayinka'}
            label2={'+2345445676'}
            label3={'₦5,000'}
            label4={'Declined by lender'}
            status={'Reapply'}
            style={{backgroundColor:'#666666', color:'white'}}
            />


           <Subcaption
            label={'February'}
            style={{textAlign:'left', color:'black', fontSize:17, fontWeight:'700', marginTop:8, marginLeft:3}}
            />

            <RequestCard
            image={simon}
            label1={'Wendy Simon'}
            label2={'+2345445676'}
            label3={'₦5,000'}
            label4={'1 installment'}
            status={'Successful'}
            style={{backgroundColor:'#4CD964', color:'white'}}
            />
        </View>
        </>
    )
}

export default Inbox;