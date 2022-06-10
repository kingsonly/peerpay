import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import payicon from '../../Assets/Icons/payicon.png';
import {ServicesCard, Caption2, Input, Subcaption, Botton1, Welcomeback, ChartSegment} from '../Widgets/Index';



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
             />
            </View>
            </View>

            

        </SafeAreaView>
        </ScrollView>
    )
}

export default Dashboard
