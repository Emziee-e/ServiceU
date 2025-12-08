import React, { Activity } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import customerSignUp1 from './customerSignUp1';
import customerSignUp2 from './customerSignUp2';
import CustomerSignUp3 from './customerSignUp3';
import ChooseProfile from './ChooseProfile';
import RatingReview from './RatingReview';
import ActivityScreen1 from './ActivityScreen1';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName='ActivityScreen1'
        screenOptions={{ headerShown: false }}
    > 
      <Stack.Screen name="ActivityScreen1" component={ActivityScreen1} />  
      <Stack.Screen name="customerSignUp" component={customerSignUp1} />
      <Stack.Screen name="customerSignUp2" component={customerSignUp2} />
      <Stack.Screen name="customerSignUp3" component={CustomerSignUp3} />
      <Stack.Screen name="RatingReview" component={RatingReview} />
      <Stack.Screen name="ChooseProfile" component={ChooseProfile} />
    </Stack.Navigator>
  );
};

export default StackNavigation;