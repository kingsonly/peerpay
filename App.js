
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Src/Screens/Splash';
import Home from './Src/Screens/Home/Home';
import Onboarding from './Src/Screens/Onboarding/Onboarding';
import Login from './Src/Screens/Auth/Login';
import Signup from './Src/Screens/Auth/Signup';
import VerificationCode from './Src/Screens/Auth/VerificationCode';
import PhoneRegistration from './Src/Screens/Auth/PhoneRegistration';
import ForgotPassword from './Src/Screens/Auth/ForgotPassword';
import PhoneVerification from './Src/Screens/Auth/PhoneVerification';
import {UserProvider, UserContext} from './Global/UserContext';
import Onboarding2 from './Src/Screens/Onboarding/Onboarding2';
import Onboarding3 from './Src/Screens/Onboarding/Onboarding3';
import Onboarding4 from './Src/Screens/Onboarding/Onboarding4';
import Onboarding5 from './Src/Screens/Onboarding/Onboarding5';
import IdCard from './Src/Screens/Auth/IdCard';
import ScanResult from './Src/Screens/Auth/ScanResult';
import Poc from './Src/Screens/Afcs/Poc';
import AfcsBorrow from './Src/Screens/Afcs/AfcsBorrow';
import Borrow from './Src/Screens/Afcs/Borrow';
import Lend from './Src/Screens/Afcs/Lend';
import Decline from './Src/Screens/Afcs/Decline';
import InstantPayment from './Src/Screens/InstantPayment/InstantPayment';
import Seller from './Src/Screens/Afcs/Seller';
import Payment from './Src/Screens/Afcs/Payment';
import Afcs from './Src/Screens/Afcs/Afcs';
import Amount from './Src/Screens/Afcs/Amount';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserProvider>
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding" component={Onboarding}  options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding2" component={Onboarding2}  options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding3" component={Onboarding3}  options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding4" component={Onboarding4}  options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding5" component={Onboarding5}  options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{headerShown: true, headerTitle:'Forgot Password', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="VerificationCode" component={VerificationCode}  options={{headerShown: true, headerTitle:'Verification Code', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="PhoneRegistration" component={PhoneRegistration}  options={{headerShown: true, headerTitle:'Phone Registration', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="PhoneVerification" component={PhoneVerification}  options={{headerShown: true, headerTitle:'Phone Verification', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="IdCard" component={IdCard}  options={{headerShown: true, headerTitle:'ID Card', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="ScanResult" component={ScanResult}  options={{headerShown: true, headerTitle:'Scan Result', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="poc" component={Poc}  options={{headerShown: true, headerTitle:'Pay On Card', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="AfcsBorrow" component={AfcsBorrow}  options={{headerShown: true, headerTitle:'Borrow Funds', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Borrow" component={Borrow}  options={{headerShown: true, headerTitle:'Borrow Funds', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Lend" component={Lend}  options={{headerShown: true, headerTitle:'Send Money', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Decline" component={Decline}  options={{headerShown: true, headerTitle:'Borrow', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="InstantPayment" component={InstantPayment}  options={{headerShown: true, headerTitle:'Instant Payment', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Seller" component={Seller}  options={{headerShown: true, headerTitle:'Contact', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Payment" component={Payment}  options={{headerShown: true, headerTitle:'Payment', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Afcs" component={Afcs}  options={{headerShown: true, headerTitle:'Payment', headerShadowVisible:false, headerBackTitleVisible:false}}/>
        <Stack.Screen name="Amount" component={Amount}  options={{headerShown: true, headerTitle:'Amount', headerShadowVisible:false, headerBackTitleVisible:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
    
  );
}

export default App;
