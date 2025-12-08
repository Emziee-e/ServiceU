import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import CustomerSignUp3 from './customerSignUp3';
import initialDashboard from './initialDashboard';
import LoggedinUser from './loggedinUser';
import bookingStep1 from './bookingStep1';
import bookingTechnicians from './bookingTechnicians';
import bookingPricing from './bookingPricing';
import bookingForms from './bookingForms';
import manageRepairers from './manageRepairers';
import manageCustomers from './manageCustomers';
import editCustomer from './editCustomer';
import editRepairer from './editRepairer';
import verifyRepairer from './verifyRepairers';
import adminLogin from './adminLogin';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator 
        initialRouteName='adminLogin'
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen name="customerSignUp" component={customerSignUp1} />
      <Stack.Screen name="customerSignUp2" component={customerSignUp2} />
      <Stack.Screen name="customerSignUp3" component={CustomerSignUp3} />
      <Stack.Screen name="initialDashboard" component={initialDashboard} />
      <Stack.Screen name="loggedinUser" component={LoggedinUser} />
      <Stack.Screen name="bookingStep1" component={bookingStep1} />
      <Stack.Screen name="bookingTechnicians" component={bookingTechnicians} />
      <Stack.Screen name="bookingPricing" component={bookingPricing} />
      <Stack.Screen name="bookingForms" component={bookingForms} />
      <Stack.Screen name="manageRepairers" component={manageRepairers} />
      <Stack.Screen name="manageCustomers" component={manageCustomers} />
      <Stack.Screen name="editCustomer" component={editCustomer} />
      <Stack.Screen name="editRepairer" component={editRepairer} />
      <Stack.Screen name="verifyRepairer" component={verifyRepairer} />
      <Stack.Screen name="adminLogin" component={adminLogin} />
    </Stack.Navigator>
  );
};

export default StackNavigation;