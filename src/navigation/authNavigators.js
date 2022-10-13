import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SubCategoryScreen } from "../screens/SubCategoryScreen";
import RootClientsTab from "./ClientTabs";
import { PreferencesScreen } from "../screens/PreferencesScreen";
import { SignInScreen } from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { CheckOutScreen } from "../screens/CheckOutScreen";
import { PlacedOrderScreen } from "../screens/PlacedOrderScreen";
import EditAcc from "../screens/EditAcc";
import DriverScreen from "../screens/DriverScreen";
import DriverOrdersScreen from "../screens/DriverOrdersScreen";

import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
        
            <Stack.Screen
                name="RootClientsTab"
                component={RootClientsTab}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="SubCategoryScreen"
                component={SubCategoryScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PreferencesScreen"
                component={PreferencesScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CheckOutScreen"
                component={CheckOutScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PlacedOrderScreen"
                component={PlacedOrderScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="EditAcc"
                component={EditAcc}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DriverScreen"
                component={DriverScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DriverOrdersScreen"
                component={DriverOrdersScreen}
                options={{
                    headerShown: false
                }}
            />
            
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    headerShown: false
                }}
            />


        </Stack.Navigator>



    )
}