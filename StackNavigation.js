import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import CustomerSignUp3 from './customerSignUp3';
import RepairerSignUp from './repairerSignUp1';
import RepairerSignUp2 from './repairerSignUp2';
import RepairerSignUp3 from './repairerSignUp3';
import RepairerSignUp4 from './repairerSignUp4';
import RepairerSignUp5 from './repairerSignUp5';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="repairerSignUp1" component={RepairerSignUp} />
      <Stack.Screen name="repairerSignUp2" component={RepairerSignUp2} />
      <Stack.Screen name="repairerSignUp3" component={RepairerSignUp3} />
      <Stack.Screen name="repairerSignUp4" component={RepairerSignUp4} />
      <Stack.Screen name="repairerSignUp5" component={RepairerSignUp5} />
    </Stack.Navigator>
  );
};

export default StackNavigation;