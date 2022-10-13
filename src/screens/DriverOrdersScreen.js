import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import DriverOrderCard from "../components/DriverOrderCard";
import Header from "../components/Header";
import { SubCatCard } from "../components/SubCatCard";
import { categories, driver, orders } from "../global/data";
export default class DriverOrdersScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { id } = this.props.route.params
        return (

            <View style={{flex:1}}>
            <Header 
                iconName='arrow-left'
                title='Orders'
                navigation={this.props.navigation}
            />
                <ScrollView>
                {
                    driver.map(item =>
                        <View key={driver.indexOf(item)}>
                            {
                                item.id === id &&
                                item.ordArr.map(items=>
                                <View key={item.ordArr.indexOf(items)}>
                                    {
                                        orders.map(ord=>
                                        <View key={orders.indexOf(ord)}>
                                            {
                                                ord.oderId==items&&
                                                <DriverOrderCard
                                                    custName={item.customer}
                                                    id={ord.oderId}
                                                    itemName={ord.orderedItem.name}
                                                    ordNb={item.orderNb}
                                                    pn={item.phone}
                                                    prc={ord.orderedItem.price}
                                                    qtty={ord.orderedItem.qtty}
                                                    time={ord.orderedItem.estimatedTime}
                                                />
                                            }
                                        </View>
                                        )
                                    }
                                </View>
                                )
                            }

                        </View>
                    )
                }

            </ScrollView>
            </View>
        )
    }
}