import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import CustomerSignUp3 from './customerSignUp3';
import ChooseProfile from './ChooseProfile';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName='ChooseProfile'
        screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ChooseProfile" component={ChooseProfile} />  
      <Stack.Screen name="customerSignUp" component={customerSignUp1} />
      <Stack.Screen name="customerSignUp2" component={customerSignUp2} />
      <Stack.Screen name="customerSignUp3" component={CustomerSignUp3} />
    </Stack.Navigator>
  );
};

export default StackNavigation;