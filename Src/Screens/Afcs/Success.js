import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Subcaption, Botton3, Botton1, RecentContacts, Avatar, Botton2, Botton4, SuccessCard} from '../../Components/Widgets/Index';
import successicon from '../../Assets/Icons/successIcon.png';

const Success =({navigation})=>{
    const Gohome=()=>{
        navigation.navigate('Home')
    
    }
    return(
        <View style={{flex:1, backgroundColor:'#000000'}}>
          <SuccessCard
          icon={successicon}
          label={'Success'}
          style={{color:'#000000', fontSize:40, fontWeight:'600'}}
          description={'Your transaction is completed and is being updated!'}
           date={'27 Nov 2022.'}
           reference={'87656549'}
           onPress={Gohome}
          />
    </View>
    )
}

export default Success;


//https://UhembeN@bitbucket.org/peerpay1-admin/mobile.git

//https://UhembeN@bitbucket.org/peerpay1/mobile.git