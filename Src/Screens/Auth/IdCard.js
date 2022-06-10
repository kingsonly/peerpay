import React, { Component } from 'react';
import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Caption2, Input, Subcaption, Botton1, IDCardContainer} from '../../Components/Widgets/Index';
const cardContainerHeight = Math.round(Dimensions.get('window').height/3)
import camera from '../../Assets/Icons/camera.png';


const IdCard = ({navigation})=>{
   
    return(
        
             <SafeAreaView style={{flex:1, flexDirection:'column', backgroundColor:'white', justifyContent:'space-between'}}>
                     <View style={{flex:1, backgroundColor:'white', marginLeft:25, marginRight:25}}>
            
                    <IDCardContainer
                    label={'Front photo of ID Card'}
                    camera={camera}
                    />

                   <IDCardContainer
                    label={'Back photo of ID card'}
                    camera={camera}
                    />
 
        </View>

        <View style={{marginLeft:25, marginRight:25, height:cardContainerHeight, justifyContent:'space-evenly'}}>
            <TouchableOpacity >
                <Text style={{marginTop:20, color:'#60A061', textAlign:'center', fontWeight:'600'}}>
                    Or Enter Number Manually
                    </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Continue'}
              onPress ={()=>{navigation.navigate('ScanResult')}}
              
              />
          </View>
           
        </View>

        







             </SafeAreaView>
        
    )
}

export default IdCard