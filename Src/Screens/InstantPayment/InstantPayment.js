import React, { Component, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import InstantPayAllTab from '../../Components/Layouts/InstantPayAllTab.js';
import InstantPayHistoryTab from '../../Components/Layouts/InstantPayHistoryTab.js';


const InstantPayment =()=>{
      const[showall, setShowall] = useState(true)
      const[showhistory, setShowhistory] = useState(false)

      const SwitchToHistoryTab =()=>{
          setShowhistory(true)
          setShowall(false)
      }

      const SwitchToAllTab =()=>{
        setShowhistory(false)
        setShowall(true)
    }



    return(
        <ScrollView style={{flex:1,backgorundColor:'#F5F5F5'}}>
            <View style={{marginTop:25, flexDirection:'row'}}>
                <TouchableOpacity style={{flexDirection:'column', flex:1}}
                onPress={SwitchToAllTab}>
                  <Text style={{textAlign:'center', fontSize:15, fontWeight:'600'}}>All</Text>
                  {
                      showall? <View style={{marginTop:5, height:2, flex:1, backgroundColor:'#60A061'}}></View> : null
                  }
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'column', flex:1}}
                onPress={SwitchToHistoryTab}
                >
                  <Text style={{textAlign:'center', fontSize:15, fontWeight:'600'}}>History</Text>
                  {
                      showhistory? <View style={{marginTop:5, height:2, flex:1, backgroundColor:'#60A061'}}></View> : null
                  }
                </TouchableOpacity>


            </View>

            <View style={{marginTop:15, marginLeft:10, marginRight:15}} >
               {showall?<InstantPayAllTab/> : null}
               {showhistory?<InstantPayHistoryTab/> : null}
            </View>
        </ScrollView>
    )
}

export default InstantPayment;