import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useRef } from "react";
import { MainStack } from "./MainStack";

import '../../../global.css';

const RootNavigator = () => {
    const routeNameRef = useRef<string | null>(null);
    const navigationRef = useRef<any>(null);

    const handleStateChange = () => {


        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute?.()?.name;

        if (previousRouteName !== currentRouteName) {
            console.log(
                `Navigation from ${previousRouteName} to ${currentRouteName}`
            );
        }

        routeNameRef.current = currentRouteName;
    };

    return (
        <>
            <StatusBar
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
            />
            <NavigationContainer
                theme={DefaultTheme}
                ref={navigationRef}
                onStateChange={handleStateChange}
            >
                <MainStack />
            </NavigationContainer>
        </>

    )
}

export default RootNavigator