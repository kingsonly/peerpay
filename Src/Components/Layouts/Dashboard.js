import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import afcs from '../../Assets/Icons/afcs.png';
import atm from '../../Assets/Icons/atm.png';
import payicon from '../../Assets/Icons/payicon.png';
import dollar from '../../Assets/Icons/dollar.png';
import {ServicesCard, Caption2, Input, Subcaption, Botton1, Welcomeback, ChartSegment, TransCard} from '../Widgets/Index';



const Dashboard = ({navigation})=>{

    return(
        <ScrollView style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
       <SafeAreaView style={{marginTop:70,  marginBottom:20,  flexDirection:'column'}}>
            <Welcomeback/>
            <ChartSegment/>
            <View style={{backgroundColor:'#60A061'}}>
                 <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:10, marginLeft:20, marginRight:20}}>
                     <Text style={{fontSize:17, fontWeight:'800', color:'white'}}>Services</Text>
                     <Text style={{fontSize:11, fontWeight:'400', color:'white'}}>See All</Text>
                 </View>

           <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
             <ServicesCard
              image = {payicon}
              label = {'Instant Payment'}
              onPress ={()=>{navigation.navigate('InstantPayment')}}
             />

             <ServicesCard
              image = {afcs}
              label = {'AFCS Payment'}
              onPress={()=>{navigation.navigate('Afcs')}}
             />

             <ServicesCard
              image = {atm}
              label = {'Withdraw'}
             />

            </View>
            </View>
            <View style={{backgroundColor:'#60A061'}}>
            <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:10, marginLeft:20, marginRight:20}}>
                     <Text style={{fontSize:17, fontWeight:'800', color:'white'}}>Recent Transactions</Text>
                     <Text style={{fontSize:11, fontWeight:'400', color:'white'}}>See All</Text>
                 </View>

                 <View style={{marginLeft:20, marginRight:20}}>
                 <TransCard
                 image={dollar}
                 label={'Payment'}
                 label1={'Payment from Richard'}
                 label2={'+₦37.42'}
                 label3={'Nov 19'}
                 />
                 </View>

            </View>



            

        </SafeAreaView>
        </ScrollView>
    )
}

export default Dashboard
