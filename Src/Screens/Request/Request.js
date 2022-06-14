import React, { Component, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Inbox from '../../Components/Layouts/Inbox.js';
import Outbox from '../../Components/Layouts/Outbox.js';


const Request =()=>{
      const[showinbox, setShowinbox] = useState(true)
      const[showoutbox, setShowoutbox] = useState(false)

      const SwitchToOutbox =()=>{
          setShowoutbox(true)
          setShowinbox(false)
      }

      const SwitchToInbox =()=>{
        setShowoutbox(false)
        setShowinbox(true)
    }



    return(
        <ScrollView style={{flex:1,backgorundColor:'#F5F5F5'}}>
            <View style={{marginTop:25, flexDirection:'row'}}>
                <TouchableOpacity style={{flexDirection:'column', flex:1}}
                onPress={SwitchToInbox}>
                  <Text style={{textAlign:'center', fontSize:15, fontWeight:'600'}}>Inbox</Text>
                  {
                      showinbox? <View style={{marginTop:5, height:2, flex:1, backgroundColor:'#60A061'}}></View> : null
                  }
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'column', flex:1}}
                onPress={SwitchToOutbox}
                >
                  <Text style={{textAlign:'center', fontSize:15, fontWeight:'600'}}>Outbox</Text>
                  {
                      showoutbox? <View style={{marginTop:5, height:2, flex:1, backgroundColor:'#60A061'}}></View> : null
                  }
                </TouchableOpacity>


            </View>

            <View style={{marginTop:15, marginLeft:10, marginRight:15}} >
               {showinbox?<Inbox/> : null}
               {showoutbox?<Outbox/> : null}
            </View>
        </ScrollView>
    )
}

export default Request;