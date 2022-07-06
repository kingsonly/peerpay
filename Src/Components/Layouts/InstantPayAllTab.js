import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Subcaption, InstantPaymentCard} from '../Widgets/Index';
import james from '../../Assets/Images/james.png';
import jane from '../../Assets/Images/jane.png';
import simon from '../../Assets/Images/simon.png';
import obi from '../../Assets/Icons/obi.png';
import kongo from '../../Assets/Icons/kongo.png';
import accessbank from '../../Assets/Icons/accessbank.png';
import lee from '../../Assets/Icons/lee.png';


const InstantPayAllTab =()=>{
    return(
        <>
        

        <View style={{flexDirection:'column', backgroundColor:'#F5F5F5', }}>
            <View style={{flexDirection:'row',marginTop:15}}>
                <InstantPaymentCard
                image={kongo}
                label={'Konga'}
                amount={'₦150,000.00'}
                status={'₦12,000 monthly'}
                bottonLabel={'Pay Now'}
                style={{height:29, fontSize:15, justifyContent:'center', marginTop:7}}
                
                />
                <InstantPaymentCard
                image={obi}
                label={'Obiwezy'}
                amount={'₦1499.00'}
                status={'Monthly installment'}
                bottonLabel={'Pay Now'}
                style={{height:29, fontSize:15, justifyContent:'center', marginTop:7}}
                
                />

            </View>

            <View style={{flexDirection:'row',marginTop:15}}>
                <InstantPaymentCard
                image={accessbank}
                label={'Konga'}
                amount={'₦150,000.00'}
                status={'₦12,000 monthly'}
                bottonLabel={'Pay Now'}
                style={{height:29, fontSize:15, justifyContent:'center', marginTop:7}}
                
                />
                <InstantPaymentCard
                image={lee}
                label={'Obiwezy'}
                amount={'₦1499.00'}
                status={'Monthly installment'}
                bottonLabel={'Pay Now'}
                style={{height:29, fontSize:15, justifyContent:'center', marginTop:7}}
                
                />

            </View>

            
            

            
        </View>
        </>
    )
}

export default InstantPayAllTab;