import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StoreScreen } from "../screens/store-screen";
import { CartScreen } from "../screens/cart-screen";
import { SuccessScreen } from '../screens/success-screen';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Navigator>
    )
};
