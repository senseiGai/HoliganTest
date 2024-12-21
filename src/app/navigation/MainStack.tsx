
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MenuScreen } from "../screens/menu-screen";
import { StoreScreen } from "../screens/store-screen";

const Stack = createNativeStackNavigator();

export const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
    </Stack.Navigator>
);
