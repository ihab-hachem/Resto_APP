import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import { Icon } from "react-native-elements";
import {colors,parameters} from '../global/style'
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { MyOrderScreen } from "../screens/MyOrderScreen";
import { MoreScreen } from "../screens/MoreScreen";


const ClientTabs=createBottomTabNavigator();

export default function RootClientsTab(){
    return(
        <ClientTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor:colors.blue1,
            "tabBarStyle":[
                {
                    'display':'flex',
                },
                null,
            ]
        }}
        >
        <ClientTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={
                
                {
                    headerShown:false,
                    tabBarLabel:"Home",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="home"
                            type="material"
                            color={color}
                            size={30}
                        />
                    )
                }
            }
        />


<ClientTabs.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={
                
                {
                    headerShown:false,
                    tabBarLabel:"Search",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="search"
                            type="material"
                            color={color}
                            size={30}
                        />
                    )
                }
            }
        />


<ClientTabs.Screen
            name="MyOrderScreen"
            component={MyOrderScreen}
            options={
                
                {
                    headerShown:false,
                    tabBarLabel:"My Order",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="view-list"
                            type="material"
                            color={color}
                            size={30}
                        />
                    )
                }
            }
        />

<ClientTabs.Screen
            name="MoreScreen"
            component={MoreScreen}
            options={
                
                {
                    headerShown:false,
                    tabBarLabel:"More",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="more"
                            type="material"
                            color={color}
                            size={30}
                        />
                    )
                }
            }
        />

        </ClientTabs.Navigator>
    )
}