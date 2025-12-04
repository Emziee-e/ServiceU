import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import customerSignUp3 from './customerSignUp3';
import initialDashboard from './initialDashboard';
import Frontpage from './Frontpage';
import InitialLogin from './initialLogin';
import ChooseProfile from './ChooseProfile';
import CustomerLogin from './customerLogin';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator 
        initialRouteName='frontPage'
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen name="customerSignUp1" component={customerSignUp1} />
      <Stack.Screen name="customerSignUp2" component={customerSignUp2} />
      <Stack.Screen name="customerSignUp3" component={customerSignUp3} />
      <Stack.Screen name="initialDashboard" component={initialDashboard} />
      <Stack.Screen name="frontPage" component={Frontpage} />
      <Stack.Screen name="initialLogin" component={InitialLogin} />
      <Stack.Screen name="chooseProfile" component={ChooseProfile} />
      <Stack.Screen name="customerLogin" component={CustomerLogin} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
