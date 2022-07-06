import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Caption, RequestCard, SmallBotton, Subcaption,InstantPaymentHistory} from '../Widgets/Index';
import james from '../../Assets/Images/james.png';
import jane from '../../Assets/Images/jane.png';
import electricbillIcon from '../../Assets/Icons/electricbillIcon.png';
import waterbillIcon from '../../Assets/Icons/waterbillIcon.png';
import mobilebillIcon from '../../Assets/Icons/mobilebillIcon.png';
import internetbillIcon from '../../Assets/Icons/internetbillIcon.png';
import tvbillIcon from '../../Assets/Icons/tvbillIcon.png';

const InstantPayHistoryTab =()=>{
    return(
        <>
        <ScrollView  style={{marginTop:10, flex:1, flexDirection:'column', }}>
          <InstantPaymentHistory
          billIcon={electricbillIcon}
          month={'Dec'}
          day={'12'}
          billType={'Electric Bill'}
          token={'8746 *** **53'}
          amount={'₦44.56'}
          style={{width:13, height:20}}
          />

           <InstantPaymentHistory
          billIcon={waterbillIcon}
          month={'Dec'}
          day={'12'}
          billType={'Water Bill'}
          token={'8746 *** **53'}
          amount={'₦120.56'}
          style={{width:17, height:20}}
          />

          <InstantPaymentHistory
          billIcon={mobilebillIcon}
          month={'Nov'}
          day={'12'}
          billType={'Mobile Bill'}
          token={'8746 *** **53'}
          amount={'₦98.56'}
          style={{width:12, height:20}}
          />

          <InstantPaymentHistory
          billIcon={internetbillIcon}
          month={'Nov'}
          day={'12'}
          billType={'Internet Bill'}
          token={'8746 *** **53'}
          amount={'₦98.56'}
          style={{width:20, height:15}}
          />

          <InstantPaymentHistory
          billIcon={tvbillIcon}
          month={'Nov'}
          day={'12'}
          billType={'Television Bill'}
          token={'8746 *** **53'}
          amount={'₦69.56'}
          style={{width:20, height:19}}
          />


        </ScrollView>

       
        </>
    )
}

export default InstantPayHistoryTab;