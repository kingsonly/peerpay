import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import logowhite from '../../Assets/Images/logo-white2.png';
import bell from '../../Assets/Icons/bell.png';
const cardContainerHeight = Math.round(Dimensions.get('window').height) / 3;
const chartWidth = Math.round(Dimensions.get('window').width) / 3.3;
import profileimage from '../../Assets/Images/profileimage.png';
import gra from '../../Assets/Images/gra2.png';

const Skip = () => {
  return (
    <View style={styles.skip}>
      <Text style={styles.skip.text}>Skip</Text>
    </View>
  );
};

const Caption = ({label, style}) => {
  return (
    <View style={[styles.caption, style]}>
      <Image source={logowhite} style={styles.caption.image} />
      <Text style={[styles.caption.text, style]}>{label}</Text>
    </View>
  );
};

const Caption2 = ({label, style}) => {
  return (
    <View style={[styles.caption2, style]}>
      <Text style={[styles.caption2.text, style]}>{label}</Text>
    </View>
  );
};

const Subcaption = ({label, style}) => {
  return (
    <View style={[styles.caption2, style]}>
      <Text style={[styles.caption2.text, style]}>{label}</Text>
    </View>
  );
};

const Botton1 = ({style, label, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.botton1, style]} {...rest}>
      <Text style={[styles.botton1.text, style]}>{label}</Text>
    </TouchableOpacity>
  );
};

const Botton2 = ({style, label, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.botton2, style]} {...rest}>
      <Text style={styles.botton2.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const Botton3 = ({icon, style, label, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.botton3, style]} {...rest}>
      <Image source={icon} style={{height: 24, width: 18, marginRight: 10}} />
      <Text style={styles.botton3.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const Tc = ({label, style}) => {
  return (
    <View>
      <Text style={styles.tc}>
        By joining you agree to ours Terms of Service and Privacy Policy
      </Text>
    </View>
  );
};

const CurrentSatge = ({label}) => {
  return (
    <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>
      {label}
    </Text>
  );
};

const Left = ({label}) => {
  return (
    <Text style={{color: '#8A8A8F', fontSize: 17, fontWeight: '600'}}>
      {label}
    </Text>
  );
};

const IDCardContainer = ({label, camera, ...rest}) => {
  return (
    <View style={{flex: 1, height: cardContainerHeight, marginTop: 20}}>
      <Text style={{fontSize: 17, fontWeight: '300', color: '#666666'}}>
        {label}
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#d8d8d8',
          flex: 1,
          backgroundColor: '#F9F9F9',
          marginTop: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...rest}>
        <Image source={camera} style={{width: 28, height: 23}} />
      </TouchableOpacity>
    </View>
  );
};

const Input = ({
  maxLength,
  keyboardType,
  label,
  required,
  secureTextEntry,
  value,
  style,
  name,
  placeholder,
  onChangeText,
  placeholderTextColor,
  ...rest
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={[styles.input, style]}
        {...rest}
        name={name}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        required={required}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};

const Avatar = ({image, height, width}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Image
        source={image}
        style={{width: width, height: height, borderRadius: 360}}
      />
    </View>
  );
};

const Icon = ({image}) => {
  return <Image source={image} style={{width: 24, height: 24}} />;
};

const Notification = () => {
  const [notecount, setNotecount] = useState(4);
  return (
    <View>
      <Image source={bell} style={{width: 25, height: 33}} />
      {notecount ? (
        <View
          style={{
            marginTop: -35,
            marginleft: 30,
            width: 18,
            height: 18,
            backgroundColor: '#FF2D55',
            borderRadius: 360,
            alignItem: 'left',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 11}}>
            {notecount}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const Welcomeback = ({image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignContent: 'center', marginRight: 10}}>
          <Avatar image={profileimage} width={32} height={32} />
        </View>
        <View>
          <Subcaption
            label={'Welcome Back!'}
            style={{
              fontSize: 11,
              color: '#666666',
              textAlign: 'left',
              fontWeight: '400',
            }}
          />
          <Subcaption
            label={'Welcome Back!'}
            style={{
              fontSize: 17,
              color: '#000000',
              textAlign: 'left',
              fontWeight: '600',
            }}
          />
        </View>
      </View>

      <View>
        <Notification />
      </View>
    </View>
  );
};


const ChartSegment = ()=>{
   return(
     //Chart Navaigation Botton
     <>
     <View style={{ flexDirection:'row', padding:20}}>

      <TouchableOpacity  style={{ borderColor:'#C8C7CC', borderWidth:1, borderTopLeftRadius:10, borderBottomLeftRadius:10, justifyContent:'center', height:40,  width:chartWidth }}>
      <Text style={{fontSize:13,fontWeight:'600',color:'#666666',textAlign:'center'}}>All Time</Text>
      </TouchableOpacity>
      
      <TouchableOpacity   style={{borderColor:'#C8C7CC', borderWidth:1,  width:chartWidth, justifyContent:'center',}}>
      <Text style={{fontSize:13,fontWeight:'600',color:'#666666', textAlign:'center'}}>This Week</Text>
      </TouchableOpacity>

      <TouchableOpacity   style={{ borderColor:'#C8C7CC', borderWidth:1, borderTopRightRadius:10, borderBottomRightRadius:10, justifyContent:'center', height:40, backgroundColor:'#60A061', width:chartWidth }}>
      <Text style={{fontSize:13,fontWeight:'600', color:'white',textAlign:'center'}}>Today</Text>
      </TouchableOpacity>
     
     </View>
     <View>
     <Subcaption
            label={'Total Balance'}
            style={{
              fontSize: 13,
              color: '#666666',
              textAlign: 'left',
              fontWeight: '400',
              marginLeft:10
            }}
          />
          <View>
          <Subcaption
            label={'₦859,372'}
            style={{
              fontSize: 28,
              color: '#000000',
              textAlign: 'left',
              fontWeight: '700',
              marginLeft:10,
              marginTop:4
            }}
          />
          </View>
          <View>
            <Image source={gra} style={{width:'100%', height:300, borderBottomLeftRadius:5, borderBottomRightRadius:5}}/>
          </View>
     </View>
     </>
     
   )

}

const ServicesCard = ({image, label, ...rest})=> {
  return(
    <TouchableOpacity style={{ color:'black',justifyContent:'center', flexDirection:'column', borderRadius: 8, width:104, height:104, backgroundColor:'white', marginTop:15, marginBottom:15}} {...rest}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
      <Image source={image} style={{width:24, height:24}}/>
      </View>
       <Text  style={{marginTop:10, marginLeft:10, marginRight:10, textAlign:'center', fontSize:15, fontWeight:'400'}}>{label}</Text>
    </TouchableOpacity>
  )
}

const TransCard = ({image, label, label1, label2, label3, ...rest})=> {
  return(
    <TouchableOpacity style={{ color:'black', padding:10, flexDirection:'row', borderRadius: 8, backgroundColor:'white', marginTop:15, marginBottom:15}} {...rest}>
        <Image source={image} style={{width:56, height:56}}/>
        <View style={{marginLeft:10, flexDirection:'column', justifyContent:'center'}}>
         <Text style={{fontSize:15, fontWeight:'500'}}>{label}</Text>
          <Text style={{marginTop:5,fontSize:13, fontWeight:'400', color:'#8A8A8F'}}>{label1}</Text>
        </View>

        <View style={{ flex:1, marginLeft:10, flexDirection:'column', justifyContent:'center'}}>
         <Text style={{textAlign:'right', fontSize:15, fontWeight:'500'}}>{label2}</Text>
          <Text style={{marginTop:5, textAlign:'right', fontSize:13, fontWeight:'400', color:'#8A8A8F'}}>{label3}</Text>
        </View>

      
    </TouchableOpacity>
  )
}
 const SmallBotton = ({label, style, ...rest})=>{
   return(
     <TouchableOpacity style={[styles.botton4, style]}  {...rest} >
       <Text style={[styles.botton3text, style]}>{label}</Text>
     </TouchableOpacity>
   )
 }

 const RequestCard =({label1, label2, label3, label4, image, status, style, ...rest})=>{
   return(
     <View style={[styles.requestcard]} {...rest}> 
      <View style={{flexDirection:'row'}}>
      <Image source={image} style={{width:45, height:45, margin:10}}/>
       <View style={{flexDirection:'column'}}>
         <Text style={{fontSize:18, fontWeight:'400', marginTop:8}}>{label1}</Text>
         <Text style={{ color:'#8A8A8F',fontSize:13, fontWeight:'400', marginTop:5}}>{label2}</Text>
         <Text style={{fontSize:18, fontWeight:'400', marginTop:5}}>{label3}</Text>
         <Text style={{ color:'#8A8A8F',fontSize:13, fontWeight:'400', marginTop:5, marginBottom:10}}>{label4}</Text>

       </View>
      </View>

       <View style={[styles.statuscard, style]}>
         <Text style={[styles.status, style]}>{status}</Text>
       </View>

     </View>
   )
 }


 const QrCard =({label1, label2, label3, label4, image, status, style, ...rest})=>{
  return(
    <View style={[styles.requestcard]} {...rest}> 
     <View style={{flexDirection:'row'}}>
     <Image source={image} style={{width:45, height:45, margin:10}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:18, fontWeight:'400', marginTop:8}}>{label1}</Text>
        <Text style={{ color:'#8A8A8F',fontSize:13, fontWeight:'400', marginTop:5}}>{label2}</Text>
      </View>
     </View>

      <View style={{marginTop:10, marginRight:10}}>
        <Text style={{color:'black', fontSize:15, fontWeight:'600'}}>{label3}</Text>
        <Text style={{color:'#8A8A8F', marginTop:5}}>{label4}</Text>
      </View>
      

    </View>
  )
}

 const QrsmallCard =({label, image, style, ...rest})=>{
   return(
     <TouchableOpacity style={[styles.qrsmallcard, style]} {...rest}>
       <Image source={image} style={{width:34, height:38}}/>
       <Text style={{fontSize:15, fontWeight:'300'}}>{label}</Text>
     </TouchableOpacity>
   )
 }

const styles = StyleSheet.create({
  qrsmallcard:{
    height:84,
    backgroundColor:'white',
    flex:1,
    marginLeft:10,
    marginRight:10,
    borderRadius:6,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.249,
    borderColor:'EFEFF4'
  },
    statuscard :{
      margin:10, height:24, borderRadius:360, backgroundColor:'#FF9500', justifyContent:'center'
    },
   status:{
    color:'white', marginLeft:10, marginRight:10, fontSize:13
   },
  requestcard:{
    flex:1,
    marginLeft:5,
    marginTop:25,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:0.2,
    borderColor:'#8A8A8F',
    flexDirection:'row',
    justifyContent:'space-between'


  },

  botton3text:{
    textAlign:'center',
    marginLeft:15,
    marginRight:15,
    fontSize:13
    
  },
  botton4: {
      height:29,
      backgroundColor:'#60A061',
      justifyContent:'center',
      borderRadius:10,
      marginLeft:5,
      marginRight:5

  },
  input: {
    height: 44,
    borderRadius: 5,
    borderColor: '#8A8A8F',
    padding: 10,
  },
  skip: {
    flex: 1,
    alignItems: 'flex-end',
    text: {
      textAlign: 'right',
      color: 'white',
      fontSize: 17,
      fontWeight: '400',
    },
  },
  botton1: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#60A061',
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600',
    },
  },
  botton2: {
    borderColor: 'white',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600',
    },
  },

  botton3: {
    borderColor: '#60A061',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: '#60A061',
      fontSize: 17,
      fontWeight: '600',
    },
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    text: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      fontWeight: '400',
      // margin: 25,
    },
    image: {
      width: 180,
      height: 49.26,
      marginBottom: 25,
    },
  },

  caption2: {
    text: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      fontWeight: '400',
      // margin: 25,
    },
  },
  tc: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    margin: 25,
  },
});
export {
  Welcomeback,
  Icon,
  Avatar,
  IDCardContainer,
  Skip,
  Caption,
  Caption2,
  Botton1,
  Botton2,
  Botton3,
  Tc,
  CurrentSatge,
  Left,
  Subcaption,
  Input,
  ChartSegment, 
  ServicesCard,
  TransCard,
  SmallBotton,
  RequestCard,
  QrsmallCard,
  QrCard,
  Notification
};
