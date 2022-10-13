import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../global/style';
import { categories, orders } from '../global/data'
import { Icon } from "react-native-elements";

export function OrderCard({ i }) {
    var qt=1;
    const [qtty, setQtty]=useState(1)
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <Text style={styles.text1}>
                    {i.name}
                </Text>
                <Text style={styles.text1}>
                    $ {i.price}
                </Text>
                <Icon
                    name="delete"
                    type="material"
                    color={colors.grey3}
                    size={25}
                />
            </View>
            <View style={styles.view3}>
                <Icon
                    name="clock-time-four"
                    type="material-community"
                    color={colors.grey2}
                    size={30}
                />
                <Text style={styles.text2}>
                    {i.estimatedTime} mins
                </Text>
                <Text style={styles.text2}>
                    Estimated delivery time
                </Text>
            </View>
            <View style={styles.view4}>
                <Text style={styles.text3}>
                    Selected Preferences
                </Text>
            </View>
            <View style={styles.view5}>
                <View >
                    {
                        i.preference.map(item =>
                            <View key={item}>
                                <Text style={styles.text4}>
                                    {item}
                                </Text>
                            </View>
                        )
                    }
                </View>
            </View>
            <View style={styles.view6}>
                <Text style={styles.text3}>Quantity</Text>
                <Icon
                    name="remove"
                    type="material"
                    color={colors.grey3}
                    size={20}
                    iconStyle={styles.iconStyle}
                    onPress={() => { 
                        if(qtty>1){
                        
                            setQtty(qtty -1)
                        }
                    }}
                />
                <Text style={styles.text3}>
                    {qtty}
                </Text>
                <Icon
                    name="add"
                    type="material"
                    color={colors.blue1}
                    size={20}
                    iconStyle={styles.iconStyle}
                    onPress={() => { 
                            
                            setQtty(qtty +1)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        width: '98%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey2,
        marginBottom: 5,
        backgroundColor:colors.white

    },
    view2: {
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'

    },
    text1: {
        color: colors.grey2,
        fontSize: 25,
        fontWeight: 'bold'
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
    },
    text2: {
        color: colors.grey3,
        fontSize: 18
    },
    view4: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    text3: {
        color: colors.grey2,
        fontSize: 20,

    },
    text4: {
        fontSize: 18,
        color: colors.grey3
    },
    view5: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: colors.grey2,
        borderRadius: 5,
        padding: 5
    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15
    }

})