import React, {Component, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


const Agree =()=>{
    alert("this is working")
}

const validation = ({name, email, password, mobile, iagree })=>{
  if(name === ""){
      const error = "Name is required"
      alert(`${error}`)
      return
  }

  if(email === ""){
    const error = "Email is required"
    alert(`${error}`)
    return
}

if(password === ""){
    const error = "Password is required"
    alert(`${error}`)
    return
}

if(mobile === ""){
    const error = "Mobile number is required"
    alert(`${error}`)
    return
}

if(iagree === false){
    const error = "You need to agree to T&C to Register"
    alert(`${error}`)
    return
}
  
}

const Register = (data)=>{

    if(data.name, data.email, data.mobile, data.password === ! "" && data.iagree){
        console.log("do register")
    }else{
        validation(data)
    }
   
    

}

export { Agree, Register, validation};