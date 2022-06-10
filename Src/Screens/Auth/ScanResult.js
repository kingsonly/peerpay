import React, { Component } from 'react';
import { View, Text, SafeAreaView , Image} from 'react-native';
import { Caption2, Input, Subcaption, Botton1, Avatar} from '../../Components/Widgets/Index';
import profileimage from '../../Assets/Images/profileimage.png';



const ScanResult = ({navigation})=>{

    return(
        <View style={{flex:1, flexDirection:'row', backgroundColor:'#EFEFF4'}}>
       <SafeAreaView style={{flex:1,marginTop:70, marginLeft:25, marginRight:25, marginBottom:25,  flexDirection:'column'}}>
            <Subcaption
            label={'Your ID Card'}
            style={{ fontSize:16, color:'#666666',textAlign:'center', fontWeight:'400'}}
            />

            <View style={{backgroundColor:'#ffffff', borderRadius: 8, padding:25, marginTop:25}}>
              <Avatar
               image={profileimage}
               width={86}
               height={86}
              />

             <View style={{pading:25}}>
             <Text style={{color:'#666666', fontSize:17,marginTop:25}}>Name</Text>
            <Input
            style={{borderBottomWidth:1, padding:0, flex:1, borderBottomColor:'#EFEFF4', fontSize:17}}
            name={'Name'}
            placeholder={'George Ndupu'}
            placeholderTextColor={'#000000'}
            />


            <Text style={{color:'#666666', fontSize:17,marginTop:25}}>ID Number</Text>
            <Input
            style={{borderBottomWidth:1, padding:0, flex:1, borderBottomColor:'#EFEFF4', fontSize:17}}
            name={'Name'}
            placeholder={'0987 7654 5432 4321'}
            placeholderTextColor={'#000000'}
            />
             </View>

              <View style={{flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Continue'}
              onPress ={()=>{navigation.navigate('Home')}}
              
              />
          </View>

            </View>

           
            
        </SafeAreaView>
        </View>
    )
}

export default ScanResult
