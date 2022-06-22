import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { QrsmallCard, QrCard, Subcaption} from '../../Components/Widgets/Index';
import paycard from '../../Assets/Images/paycard.png';
import money from '../../Assets/Images/money.png';
import simon from '../../Assets/Images/simon.png';
import ade from '../../Assets/Images/ade.png';
import ike from '../../Assets/Images/ike.png';
import john from '../../Assets/Images/john.png';


const Qr =()=>{
    return(
    <ScrollView style={{flex:1,backgorundColor:'#F5F5F5'}}>
        <View style={{flexDirection:'row',flex:1, marginTop:70, marginLeft:10, marginRight:10, justifyContent:'space-between'}}>
            <QrsmallCard
            image={paycard}
            label={'Pay on credit'}
            />
            <QrsmallCard
            image={money}
            label={'Borrow funds'}
            />
        </View>
        
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Subcaption
            label={'Your Requests'}
            style={{textAlign:'left', color:'black', fontSize:17, fontWeight:'700', marginTop:10, marginLeft:10}}
            />
            <TouchableOpacity style={{marginTop:20, marginRight:20}}>
                <Text style={{color:'#60A061', fontSize:15}}>
                    View all
                </Text>
                <View style={{borderWidth:1, borderColor:'#60A061'}}></View>
            </TouchableOpacity>
        </View>
        <View   style={{marginLeft:10, marginRight:20}}>
        <Subcaption
            label={'This Week'}
            style={{textAlign:'left', color:'black', fontSize:16, fontWeight:'700', marginTop:10, marginLeft:8}}
            />

            <QrCard
            label1={'James Ikenna'}
            label2={'JamesIkenna@gmail.com'}
            image={ike}
            label3={'₦5,000'}
            label4={'Loan'}
            />

            <QrCard
            label1={'Mujeeb Ade'}
            label2={'MujeebAde@gmail.com'}
            image={ade}
            label3={'₦5,000'}
            label4={'Credit'}
            />

        </View>

        <View   style={{marginLeft:10, marginRight:20, marginTop:10}}>
        <Subcaption
            label={'February'}
            style={{textAlign:'left', color:'black', fontSize:16, fontWeight:'700', marginTop:10, marginLeft:8}}
            />

            <QrCard
            label1={'Ekanem John'}
            label2={'john@afcsid@gmail.com'}
            image={john}
            label3={'₦5,000'}
            label4={'Credit'}
            />

            <QrCard
            label1={'Wendy Simon'}
            label2={'WendySimon@gmail.com'}
            image={simon}
            label3={'₦5,000'}
            label4={'Loan'}
            />

        </View>
    </ScrollView>

    )
}

export default Qr;