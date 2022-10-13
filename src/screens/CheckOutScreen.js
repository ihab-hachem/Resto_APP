import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { CheckOutComp } from "../components/CheckOutComp";
import Header from "../components/Header";
import { orders, services, user } from "../global/data";
import { colors } from "../global/style"
import { Icon, CheckBox } from "react-native-elements";

export function CheckOutScreen({ navigation }) {
    return (
        <View style={styles.view1}>
            <View>
                <Header iconName='arrow-left' title='My Order' navigation={navigation} />
            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {
                        orders.length != 0 &&
                        orders.map(item =>
                            <View key={orders.indexOf(item)}>
                                {item.userId === user.id &&
                                    <TouchableOpacity key={orders.indexOf(item)}
                                        onPress={() => { navigation.navigate("MyOrderScreen") }}
                                    >
                                        <CheckOutComp name={item.orderedItem.name} price={item.orderedItem.price} />
                                    </TouchableOpacity>
                                }

                            </View>

                        )
                    }
                    {
                        orders.length === 0 &&
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
                            <Text style={styles.text1}>
                                No orders yet
                            </Text>
                        </View>
                    }

                </View>

                <View style={styles.view2}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text2}>
                            Delivery fees
                        </Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={styles.text2}>
                            $ {services.delivery}
                        </Text>
                    </View>

                </View>
                <View style={styles.view2}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.text2}>
                            VAT
                        </Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={styles.text2}>
                            {services.vat} %
                        </Text>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text3}>
                            Total
                        </Text>
                    </View>
                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text3}>
                            $ {services.total}
                        </Text>
                    </View>
                </View>
                <View >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text5}>
                            Select Your Location
                        </Text>
                    </View>

                    <View style={styles.view4}>
                        <View style={styles.view3}>
                            <CheckBox
                                center
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={true}
                                checkedColor={colors.blue1}
                            />
                            <Icon
                                name="home"
                                type="material-community"
                                color={colors.grey2}
                                size={30}
                            />
                            <Text style={styles.text4}>Home</Text>
                        </View>
                        <View style={styles.view3}>
                            <CheckBox
                                center
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                                checkedColor={colors.blue1}
                            />
                            <Icon
                                name="work"
                                type="material"
                                color={colors.grey2}
                                size={30}
                            />
                            <Text style={styles.text4}>Work</Text>
                        </View>
                    </View>
                    <View style={styles.view5}>
                        <TouchableOpacity style={styles.selectLoc}>
                            <Icon
                                name="map-marker"
                                type="material-community"
                                color={colors.grey2}
                                size={32}
                            />
                            <Text style={styles.text4}>
                                Select another location
                            </Text>
                        </TouchableOpacity>
                        {user.userAddress!=null &&
                            <View style={styles.view9}>
                            <View style={styles.view8}>
                                <TextInput style={styles.text7}>
                                    {user.userAddress}
                                </TextInput>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginRight:30}}>
                                <Icon
                                    name="pencil"
                                    type="material-community"
                                    color={colors.blue1}
                                    size={40}
                                />
                            </View>
                        </View>
                        }
                        {user.userAddress==null &&
                            <View style={styles.view9}>
                            <View style={styles.view8}>
                                <TextInput style={styles.text7}
                                placeholder='You must select an address'
                                >
                                    
                                </TextInput>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginRight:30}}>
                                <Icon
                                    name="plus-circle"
                                    type="material-community"
                                    color={colors.blue1}
                                    size={55}
                                />
                            </View>
                        </View>
                        }
                    </View>

                </View>
                <View style={styles.view7}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text5}>
                            Select Your Payment Method
                        </Text>
                    </View>
                    <View style={styles.view6}>
                        <CheckBox
                            center
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={true}
                            checkedColor={colors.blue1}
                            size={30}
                        />
                        <Icon
                            name="credit-card"
                            type="material"
                            color={colors.grey2}
                            size={30}

                        />
                        <Text style={styles.text4}>
                            Credit-Card
                        </Text>
                    </View>
                    <View style={styles.view6}>
                        <CheckBox
                            center
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={false}
                            checkedColor={colors.blue1}
                            size={30}
                        />
                        <Icon
                            name="credit-card"
                            type="material"
                            color={colors.grey2}
                            size={30}

                        />
                        <Text style={styles.text4}>
                            Visa-Card
                        </Text>
                    </View>
                    <View style={styles.view6}>
                        <CheckBox
                            center
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={false}
                            checkedColor={colors.blue1}
                            size={30}
                        />
                        <Icon
                            name="credit-card"
                            type="material"
                            color={colors.grey2}
                            size={30}

                        />
                        <Text style={styles.text4}>
                            Pay-Pal
                        </Text>
                    </View>
                    <View style={styles.view6}>
                        <CheckBox
                            center
                            checkedIcon='check-square-o'
                            uncheckedIcon='square-o'
                            checked={false}
                            checkedColor={colors.blue1}
                            size={30}
                        />
                        <Icon
                            name="credit-card"
                            type="material"
                            color={colors.grey2}
                            size={30}

                        />
                        <Text style={styles.text4}>
                            Cash On Delivery
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.addItem2}
                        onPress={() => { navigation.navigate("PlacedOrderScreen") }}>
                        <Icon
                            name="add"
                            type="material"
                            size={35}
                            color={colors.white}
                        />
                        <Text style={styles.text6}>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        flex: 1
    },
    text1: {
        color: colors.grey2,
        fontSize: 25,
        fontWeight: 'bold'
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    text2: {
        color: colors.grey3,
        fontSize: 20
    },
    text3: {
        color: colors.grey1,
        fontSize: 25,
        fontWeight: 'bold'
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    view4: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    text4: {
        color: colors.grey2,
        fontSize: 18,
        marginLeft: 5
    },
    text5: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5
    },
    selectLoc: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.blue2,
        borderRadius: 15,
        margin: 5,

    },
    view5: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderBottomColor: colors.grey2
    },
    view6: {
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 15
    },
    view7: {
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    addItem2: {
        flexDirection: 'row',
        backgroundColor: colors.blue2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginBottom: 2
    },
    text6: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold'
    },
    view8: {
        width: '70%',
        height: '90%',
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        padding:10,
        marginLeft:10
    },
    view9: {
        width: '100%',
        height: 80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:5
    },
    text7:{
        color:colors.grey2,
        fontSize:18,
        

    }
})