import React, { Component, useState, useContext } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Botton1, Botton3, Caption2, Input, Subcaption } from '../../Components/Widgets/Index';
import Fingerprint from '../../Assets/Icons/fingerprint.png'
const Login = ({ navigation }) => {


    const [password, setPassword] = useState()

    const data = {
        password,
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>

            <View style={{ marginTop: 100, marginLeft: 20, marginRight: 20 }}>
                <Caption2
                    label={'Welcome!'}
                    style={{ fontSize: 40, fontWeight: '700', color: 'black', marginBottom: 10 }}
                />
                <Subcaption
                    label={'Uhembe Nelson'}
                    style={{ fontSize: 16, color: 'black', fontWeight: '400' }}
                />

                <Subcaption
                    label={'Uhembenelson@gmail.com'}
                    style={{ fontSize: 16, color: 'black', fontWeight: '400' }}
                />

                

                <Input
                    testID="password"
                    style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', borderWidth: 1, borderColor: '#D8D8D8', backgroundColor: '#EFEFF4', marginTop: 40, width: '100%', color: '#8A8A8F' }}
                    name={'Name'}
                    placeholder={'Enter password'}
                    placeholderTextColor={'#8A8A8F'}
                    onChangeText={(e) => setPassword(e.target.value)}
                    //    value={}
                    required
                />

      <View style={{ flexDirection: 'row', marginTop:30}}>
              <Botton1
              label = {'Sign In'}
              onPress={()=>{navigation.navigate('Home')}}
              
              />
          </View>

                <View style={{ flexDirection: 'row', marginTop: 18 }}>
                    <Botton3
                        label={'Sign In with Fingerprint'}
                        icon={Fingerprint}
                    />
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
                    <Subcaption
                        label={'Forgot password?'}
                        style={{ fontSize: 16, color: 'black', fontWeight: '600', marginTop: 13 }}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                    <Subcaption
                        label={'Don’t have an account? Sign Up'}
                        style={{ fontSize: 16, color: 'black', fontWeight: '600', marginTop: 13 }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ margin: 10, fontSize: 17, fontWeight: '600' }}>ATM/CDM</Text>
                <Text style={{ margin: 10, color: '#8A8A8F' }}>|</Text>
                <Text style={{ margin: 10, fontSize: 17, fontWeight: '600' }}>FAQ</Text>
                <Text style={{ margin: 10, color: '#8A8A8F' }}>|</Text>
                <Text style={{ margin: 10, fontSize: 17, fontWeight: '600' }}>Contact</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login;