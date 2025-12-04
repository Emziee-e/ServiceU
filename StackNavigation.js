import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChooseProfile from "./ChooseProfile";

const stack = createNativeStackNavigator();

const stackNavigator = () => {
    return(
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="ChooseProfile" component={ChooseProfile}/>
        </stack.Navigator>
    );
};
export default stackNavigator;