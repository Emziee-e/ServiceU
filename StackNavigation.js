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
import RepairerSignUp from './repairerSignUp1';
import RepairerSignUp2 from './repairerSignUp2';
import RepairerSignUp3 from './repairerSignUp3';
import RepairerSignUp4 from './repairerSignUp4';
import RepairerSignUp5 from './repairerSignUp5';
import RepairerLogin from './repairerLogin';
import LoggedinUser from './loggedinUser';
import RepairerDashboard from './repairerDashboard';


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
      <Stack.Screen name="repairerSignUp1" component={RepairerSignUp} />
      <Stack.Screen name="repairerSignUp2" component={RepairerSignUp2} />
      <Stack.Screen name="repairerSignUp3" component={RepairerSignUp3} />
      <Stack.Screen name="repairerSignUp4" component={RepairerSignUp4} />
      <Stack.Screen name="repairerSignUp5" component={RepairerSignUp5} />
      <Stack.Screen name="repairerLogin" component={RepairerLogin} />
      <Stack.Screen name="loggedinUser" component={LoggedinUser} />
      <Stack.Screen name="repairerDashboard" component={RepairerDashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
