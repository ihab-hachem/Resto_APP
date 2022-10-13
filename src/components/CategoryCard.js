import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../global/style';
import { categories } from '../global/data'
import { Icon } from "react-native-elements";

export function CategoryCard({ imgUri, name }) {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: imgUri }}
                    />
                    <View>
                        <Text style={styles.text2}>
                            {name}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Icon
                        name="arrow-right"
                        type="material-community"
                        color={colors.blue2}
                        size={30}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        padding: 10,
    },

    view2: {
        flex: 1,
        flexDirection: "row",
        padding: 0,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    view3: {
        flexDirection: 'row',
        flex: 6,
        alignItems:'center',
    },

    imageStyle: {
        width: 80,
        height: 80
    },
    text2: {
        fontSize: 25,
        color: colors.grey1,
        marginLeft: 20,
        fontWeight:'bold'
    },
})


