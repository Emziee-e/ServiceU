import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import customerSignUp3 from './customerSignUp3';
import ManageBookings from './manageBookings';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName='manageBookings'
    >
      <Stack.Screen name="customerSignUp" component={customerSignUp1} />
      <Stack.Screen name="customerSignUp2" component={customerSignUp2} />
      <Stack.Screen name="customerSignUp3" component={customerSignUp3} />
      <Stack.Screen name="manageBookings" component={ManageBookings} />
    </Stack.Navigator>
  );
};

export default StackNavigation;