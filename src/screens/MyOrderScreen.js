import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../components/Header";
import { OrderCard } from "../components/OrderCard";
import { categories, orders, user } from "../global/data";
import { colors } from "../global/style";
import { Icon } from "react-native-elements";
export function MyOrderScreen({ navigation }) {
    return (
        <View style={styles.view1}>
            <View>
                <Header iconName='arrow-left' navigation={navigation} title='My Orders' />
            </View>
            <View style={styles.view2}>
                <Text style={styles.text1}>
                    Your Order
                </Text>
                <Text style={styles.text2} onPress={() => {
                    navigation.navigate("HomeScreen")
                }}>
                    See Menu
                </Text>
            </View>
            <ScrollView style={{ marginTop: 5 }}>
                <View >
                    {
                        orders.map(items =>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} key={orders.indexOf(items)}>
                                { items.userId===user.id &&
                                    <OrderCard i={items.orderedItem} />
                                }
                                

                            </View>
                        )
                    }
                </View>
                <View style={{ marginLeft: 15 }}>
                    <TouchableOpacity style={styles.addItem}
                        onPress={() => { navigation.navigate("HomeScreen") }}>
                        <Icon
                            name="add"
                            type="material"
                            color={colors.grey1}
                            size={20}
                        />
                        <Text style={styles.text5}>Add Item</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.addItem2}
                    onPress={() => {
                        if(user.status===true)
                        {
                            navigation.navigate("CheckOutScreen")
                        }else{
                            navigation.navigate("SignInScreen")
                        }
                        }}
                >
                    <Icon
                        name="add"
                        type="material"
                        size={35}
                        color={colors.white}
                    />
                    <Text style={styles.text6}>
                        Order Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        flex: 1
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    text1: {
        color: colors.black,
        fontSize: 22,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green'

    },
    addItem: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.grey1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        marginTop: 5,
        backgroundColor: colors.grey5,
        marginHorizontal: 20,
        marginBottom: 10
    },
    addItem2: {
        flexDirection: 'row',
        backgroundColor: colors.blue2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginBottom: 2
    },
    text5: {
        fontSize: 18,
        color: colors.grey2,
        marginLeft: 10
    },
    text6: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold'
    }
})