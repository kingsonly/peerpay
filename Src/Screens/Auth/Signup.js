import React, { Component, useState, useContext} from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import { Caption2, Input, Subcaption, Botton1} from '../../Components/Widgets/Index';
import { Agree, Register, validation } from '../../Logic.js';
import check from '../../Assets/Icons/check.png';


const Signup =({navigation})=> {

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[mobile, setMobile] = useState()
    const[iagree, setIagree] = useState(false)

    const data = {
      name,
      email,
      password,
      mobile,
      iagree
    }

    const Agree =()=>{
        setIagree(true)
    }

    

    return(

      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{marginTop:100,marginLeft:20, marginRight:20}}>
        <Caption2
         label={'Welcome to PeerPay'}
         style={{fontSize:40, fontWeight:'700',textAlign:'left', color:'black'}}
         />
     
         <Subcaption
         label={'Sign up to join'}
         style={{marginTop:10, fontSize:17, color:'#666666',textAlign:'left'}}
         />
            <Text></Text>
         <Input
           style={{ backgroundColor:'#E7E7E7', marginTop:40, width:'100%', color:'#8A8A8F'}}
           name={'Name'}
           placeholder={'Name'}
           placeholderTextColor={'#8A8A8F'}
           onChangeText={setName}
           value={name}
           required
         />
          <Input
           style={{ backgroundColor:'#E7E7E7', marginTop:10, width:'100%', color:'#8A8A8F'}}
           name={'email'}
           placeholder={'Email'}
           placeholderTextColor={'#8A8A8F'}
           onChangeText={setEmail}
           value={email}
           secureTextEntry={false}
           required
         />
         <Input
           style={{ backgroundColor:'#E7E7E7', marginTop:10, width:'100%', color:'#8A8A8F'}}
           name={'password'}
           placeholder={'Password'}
           placeholderTextColor={'#8A8A8F'}
           onChangeText={setPassword}
           value={password}
           secureTextEntry={true}
           required
         />

         <Input
           style={{ backgroundColor:'#E7E7E7', marginTop:10, width:'100%', color:'#8A8A8F'}}
           name={'mobile'}
           placeholder={'Mobile'}
           placeholderTextColor={'#8A8A8F'}
           onChangeText={setMobile}
           value={mobile}
           secureTextEntry={false}
           required
         />
        <TouchableOpacity style={{marginTop:20}} onPress={()=>{Agree()}}>
       <View style={{flexDirection:'row'}}>
        {
            iagree?(<><Image source={check} style={{width:20, height:20}}/>
            <Text style={{color:'#666666'}}>  I agree to the Terms of Service</Text>
            </>):
            (<Text style={{color:'#666666'}}>  I agree to the Terms of Service</Text>)
        }
       
       </View>
        </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop:10}}>
              <Botton1
              label = {'Sign Up'}
              onPress={()=>{Register(data)}}
              />
          </View>
        </View>

        <View style={{marginTop:100,marginLeft:20, marginRight:20}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
          <Subcaption
           label={'Have an account? Sign In'}
            style={{fontSize:16, color:'black', fontWeight:'600', marginTop:13}}
        />
          </TouchableOpacity>
        </View>
        </SafeAreaView>





  //       <View style={{backgroundColor:'#Ffffff', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
  //           <SafeAreaView style={{marginTop:120, marginLeft:20, marginRight:20,}}>
  //        <Caption2
  //        label={'Welcome to PeerPay'}
  //        style={{fontSize:40, fontWeight:'700',textAlign:'left', color:'black'}}
  //        />
     
  //        <Subcaption
  //        label={'Sign up to join'}
  //        style={{marginTop:10, fontSize:17, color:'#666666',textAlign:'left'}}
  //        />
  //           <Text></Text>
  //        <Input
  //          style={{ backgroundColor:'#EFEFF4', marginTop:40, width:'100%', color:'#8A8A8F'}}
  //          name={'Name'}
  //          placeholder={'Name'}
  //          placeholderTextColor={'#8A8A8F'}
  //          onChangeText={setName}
  //          value={name}
  //          required
  //        />
  //         <Input
  //          style={{ backgroundColor:'#EFEFF4', marginTop:10, width:'100%', color:'#8A8A8F'}}
  //          name={'email'}
  //          placeholder={'Email'}
  //          placeholderTextColor={'#8A8A8F'}
  //          onChangeText={setEmail}
  //          value={email}
  //          secureTextEntry={false}
  //          required
  //        />
  //        <Input
  //          style={{ backgroundColor:'#EFEFF4', marginTop:10, width:'100%', color:'#8A8A8F'}}
  //          name={'password'}
  //          placeholder={'Password'}
  //          placeholderTextColor={'#8A8A8F'}
  //          onChangeText={setPassword}
  //          value={password}
  //          secureTextEntry={true}
  //          required
  //        />

  //        <Input
  //          style={{ backgroundColor:'#EFEFF4', marginTop:10, width:'100%', color:'#8A8A8F'}}
  //          name={'mobile'}
  //          placeholder={'Mobile'}
  //          placeholderTextColor={'#8A8A8F'}
  //          onChangeText={setMobile}
  //          value={mobile}
  //          secureTextEntry={false}
  //          required
  //        />
  //       <TouchableOpacity style={{marginTop:20}} onPress={()=>{Agree()}}>
  //      <View style={{flexDirection:'row'}}>
  //       {
  //           iagree?(<><Image source={check} style={{width:20, height:20}}/>
  //           <Text style={{color:'#666666'}}>  I agree to the Terms of Service</Text>
  //           </>):
  //           (<Text style={{color:'#666666'}}>  I agree to the Terms of Service</Text>)
  //       }
       
  //      </View>
  //       </TouchableOpacity>
  //           <View style={{flexDirection: 'row', marginTop:10}}>
  //             <Botton1
  //             label = {'Sign Up'}
  //             onPress={()=>{Register(data)}}
  //             />
  //         </View>

  //  </SafeAreaView>
  //       </View>
    )
}

export default Signup;