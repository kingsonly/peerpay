import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Botton1, Botton4 ,PaymentMethod} from '../../Components/Widgets/Index';
import add from '../../Assets/Icons/Add.png';
import card from '../../Assets/Icons/card.png';
import checkicon from '../../Assets/Icons/checkIcon.png';
import uncheck from '../../Assets/Icons/uncheck.png';
import bankicon from '../../Assets/Icons/bankIcon.png';
import walleticon from '../../Assets/Icons/walletIcon.png';
import cash from '../../Assets/Icons/cash.png';



const Payment =()=>{


    return(
        <SafeAreaView style={{backgroundColor:'#ffffff', flex:1, flexDirection:'column', justifyContent:'space-between'}}>
        <View style={{marginTop:20, flexDirection:'column'}}>
            
           <PaymentMethod
            icon={card}
            paymentType={'Card'}
            style={{width:24, height:19}}
            paymentTypeDescription={'Transfer from card'}
            check={checkicon}
            />

            <PaymentMethod
            icon={bankicon}
            paymentType={'Bank Tranfer'}
            style={{width:24, height:24}}
            paymentTypeDescription={'Pay online or local bank transfer'}
            check={uncheck}
            />
            
            <PaymentMethod
            icon={walleticon}
            paymentType={'Wallet'}
            style={{width:24, height:24}}
            paymentTypeDescription={'Transfer from eWallet account'}
            check={uncheck}
            />

            <PaymentMethod
            icon={cash}
            paymentType={'Cash'}
            style={{width:24, height:24}}
            paymentTypeDescription={'Borrower will confirm receipt'}
            check={uncheck}
            />
          
           
        </View>

  
        
            <View style={{flexDirection:'row', marginLeft:15, marginRight:15}}>
            
            <Botton1
            style={{marginRight:10}}
            label={'Confirmation'}
            onPress ={()=>{navigation.navigate()}}
            />

            </View>
     
     </SafeAreaView>
    )





    // return(
    //     // <SafeAreaView style={{flex:1, backgroundColor:'#ffffff', flexDirection:'column', justifyContent:'space-between'}}>
    //     //   <View>
    //     //       <Text>one</Text>
    //     //   </View>

    //        {/* <View style={{flexDirection:'column', justifyContent:'space-between'}}>
    //        <PaymentMethod
    //         icon={card}
    //         paymentType={'Card'}
    //         style={{width:24, height:19}}
    //         paymentTypeDescription={'Transfer from card'}
    //         check={checkicon}
    //         />

    //         <PaymentMethod
    //         icon={bankicon}
    //         paymentType={'Bank Tranfer'}
    //         style={{width:24, height:24}}
    //         paymentTypeDescription={'Pay online or local bank transfer'}
    //         check={uncheck}
    //         />
            
    //         <PaymentMethod
    //         icon={walleticon}
    //         paymentType={'Wallet'}
    //         style={{width:24, height:24}}
    //         paymentTypeDescription={'Transfer from eWallet account'}
    //         check={uncheck}
    //         />

    //         <PaymentMethod
    //         icon={cash}
    //         paymentType={'Cash'}
    //         style={{width:24, height:24}}
    //         paymentTypeDescription={'Borrower will confirm receipt'}
    //         check={uncheck}
    //         />

    //        </View> */}

         
            
    //     {/* </SafeAreaView> */}
    // )
}

export default Payment;