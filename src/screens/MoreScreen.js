import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Icon } from "react-native-elements";
import { user } from "../global/data";
import { colors } from "../global/style"
import Header from "../components/Header"

export function MoreScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: colors.white, height:'100%' }}>
            <Header iconName='arrow-left' navigation={navigation} title='Settings' />
            {user.status===true&&
                <View style={styles.view2}>
                <View>
                    <View style={styles.view1}>
                        <Text style={styles.text1}>{user.username[0]}</Text>
                    </View>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>
                        {user.username}
                    </Text>
                    <Text style={styles.text2}>
                        {user.userEmail}
                    </Text>
                </View>
            </View>
            }
            {user.status!=true&&
                <View style={styles.view2}>
                <View>
                    <View style={styles.view1}>
                        <Text style={styles.text1}>?</Text>
                    </View>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text2}>
                        Sign In with your account
                    </Text>
                    <Text style={styles.text2}>
                        Or create new one
                    </Text>
                </View>
            </View>
            }
            <ScrollView>
            
                <View style={styles.view5}>
                
                    {user.status===true&&
                        <View>
                        <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate("EditAcc")
                     }}>
                        <View style={styles.view4}>
                            <Icon
                                name="account-cog"
                                type='material-community'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                        
                        </View>
                    }
                
                    {
                        user.desc==='admin' && user.status===true &&
                        <View>
                    <TouchableWithoutFeedback onPress={() => { 
                        navigation.navigate("DriverScreen")
                    }}>
                        <View style={styles.view4}>
                            <Icon
                                name="moped-electric"
                                type='material-community'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Driver
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                        </View>
                        
                    
                    }
                    {
                        user.desc==='driver' && user.status===true &&
                        <TouchableWithoutFeedback onPress={() => { 
                            navigation.navigate("DriverScreen")
                        }}>
                        <View style={styles.view4}>
                            <Icon
                                name="moped-electric"
                                type='material-community'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Driver
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    }
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate("MapScreen")
                     }}>
                        <View style={styles.view4}>
                            <Icon
                                name="map-marker"
                                type='material-community'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Location
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.view4}>
                            <Icon
                                name="credit-card-outline"
                                type='material-community'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Payment
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.view4}>
                            <Icon
                                name="help"
                                type='material'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Help
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {user.status===true&&
                        <View>
                        <TouchableWithoutFeedback onPress={() => { }}>
                        <View style={styles.view4}>
                            <Icon
                                name="person"
                                type='material'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Log-Out
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                        </View>
                    }
                    {user.status!=true&&
                        <View>
                        <TouchableWithoutFeedback onPress={() => {navigation.navigate("SignInScreen") }}>
                        <View style={styles.view4}>
                            <Icon
                                name="person"
                                type='material'
                                size={35}
                                color={colors.grey2}
                            />
                            <Text style={styles.text3}>
                                Sign-In
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.blue2,
        backgroundColor: colors.blue1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text1: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold'
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    view3: {
        padding: 10
    },
    text2: {
        color: colors.grey2,
        fontSize: 18,
        marginBottom: 5

    },
    view4: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    text3: {
        color: colors.grey2,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    view5: {
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: colors.grey3,
        marginTop: 5
    }
})