import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Caption, RequestCard, SmallBotton, Subcaption} from '../Widgets/Index';
import james from '../../Assets/Images/james.png';
import jane from '../../Assets/Images/jane.png';
import simon from '../../Assets/Images/simon.png';

const InstantPayHistoryTab =()=>{
    return(
        <>
        <ScrollView  style={{marginTop:10, backgroundColor:'#F5F5F5', flex:1, flexDirection:'column', }}>
           <Text>History</Text>
        </ScrollView>

       
        </>
    )
}

export default InstantPayHistoryTab;