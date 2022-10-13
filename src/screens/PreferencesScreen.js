import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image, Platform, ToastAndroid, Alert } from 'react-native';
import Header from "../components/Header";
import { categories, user, orders } from "../global/data";
import { colors, parameters } from "../global/style"
import { Icon, CheckBox } from "react-native-elements";

export class PreferencesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ing: categories[this.props.route.params.index].subCategory[this.props.route.params.n].ingredients,
            
        }
        
    }
    render() {
        const { index } = this.props.route.params
        const { n } = this.props.route.params
        
        return (
            <View style={styles.view1}>
                <View>
                    <Header
                        iconName='arrow-left'
                        title={categories[index].subCategory[n].name}
                        navigation={this.props.navigation}
                    />
                </View>
                <ScrollView>
                    <View style={styles.view2}>
                        <Image
                            source={{ uri: categories[index].subCategory[n].image }}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.view3}>
                        <View style={styles.view5}>
                            <Text style={styles.text1}>
                                {categories[index].subCategory[n].name}
                            </Text>
                            <Text style={styles.text2}>
                                {categories[index].subCategory[n].description}
                            </Text>
                        </View>
                        <View style={styles.view4}>
                            <Text style={styles.text3}>
                                $ {categories[index].subCategory[n].price}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.view6}>
                        <Text style={styles.text4}>
                            Ingredients
                        </Text>
                    </View>
                    <View style={styles.view7}>
                        {
                            this.state.ing.map(items =>
                                <View key={this.state.ing.indexOf(items)}>
                                    <TouchableOpacity style={styles.ingstyle}
                                        
                                    >
                                        <CheckBox
                                            center
                                            checkedIcon='check-square-o'
                                            uncheckedIcon='square-o'
                                            checked={true}
                                            checkedColor={colors.blue1}
                                            

                                        />
                                        <Text style={styles.text4}>
                                            {items}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        }
                    </View>
                    <View>
                        <TouchableOpacity style={styles.addItem}
                            onPress={() => {
                                if (user.status === true) {
                                    if (Platform.OS === 'android') {
                                        ToastAndroid.show('Added to cart', ToastAndroid.SHORT)
                                    } else {
                                        Alert.alert('Added to cart')
                                    }
                                    //this.props.navigation.navigate("MyOrderScreen")
                                    this.props.navigation.goBack()
                                }else{
                                    if (Platform.OS === 'android') {
                                        ToastAndroid.show('You must sign in first', ToastAndroid.SHORT)
                                    } else {
                                        Alert.alert('You must sign in first')
                                    }
                                    this.props.navigation.navigate("SignInScreen")
                                }

                            }}
                        >
                            <Icon
                                name="add"
                                type="material"
                                size={35}
                                color={colors.white}
                            />
                            <Text style={styles.text5}>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 1
    },
    imageStyle: {
        width: '98%',
        height: 300,

    },
    view2: {
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 8,
        elevation: 4,
        shadowOpacity: 0.9,
        shadowColor: "black",
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        color: colors.black,
        fontSize: 25,
        fontWeight: 'bold'
    },
    text2: {
        color: colors.grey3,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text3: {
        color: colors.grey1,
        fontSize: 30,
        fontWeight: 'bold'
    },
    view5: {
        marginLeft: 10
    },
    view6: {
        margin: 10
    },

    text4: {
        color: colors.grey2,
        fontSize: 20
    },
    view7: {

        backgroundColor: colors.white,
        margin: 5
    },
    ingstyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addItem: {
        flexDirection: 'row',
        backgroundColor: colors.blue2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 2
    },
    text5: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold'
    }
})