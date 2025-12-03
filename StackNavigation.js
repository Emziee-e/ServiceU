import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomerSignUp from './customerSignUp1';
import CustomerSignUp2 from './customerSignUp2';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="customerSignUp" component={CustomerSignUp} />
      <Stack.Screen name="customerSignUp2" component={CustomerSignUp2} />
    </Stack.Navigator>
  );
};

export default StackNavigation;