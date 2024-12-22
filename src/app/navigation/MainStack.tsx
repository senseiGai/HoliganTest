import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MenuScreen } from "../screens/menu-screen";
import { StoreScreen } from "../screens/store-screen";
import { CartScreen } from "../screens/cart-screen";
import { SuccessScreen } from '../screens/success-screen';
import { BookingScreen } from '../screens/booking-screen';
import { ContactScreen } from '../screens/contact-screen';
import { EventsScreen } from '../screens/events-screen';
import { GamesScreen } from '../screens/games-screen';
import { MovieScreen } from '../screens/movie-screen';
import { RagbiScreen } from '../screens/ragbi-screen';
import { CricketScreen } from '../screens/cricket-screen';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Store" component={StoreScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="Games" component={GamesScreen} />
            <Stack.Screen name="Movie" component={MovieScreen} />
            <Stack.Screen name="Ragbi" component={RagbiScreen} />
            <Stack.Screen name="Cricket" component={CricketScreen} />
        </Stack.Navigator>
    )
};
