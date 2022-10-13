import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../global/style';
import { categories, orders } from '../global/data'
import { Icon } from "react-native-elements";
export function CheckOutComp({price, name}){
    return(
        
        <View style={styles.view1}>
            <View style={styles.view2}>
            <Text style={styles.text1}>
                {name}
            </Text>
            </View>
            <View style={{width:'25%'}}>
            <Text style={styles.text1}>
                $ {price}
            </Text>
            </View>
            <View >
            <Icon
                    name="delete"
                    type="material"
                    color={colors.grey3}
                    size={25}
                    onPress={()=>{}}
                />
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    view1:{
        flexDirection:'row',
        width:'95%',
        borderBottomWidth:1,
        borderBottomColor:colors.grey4,
        justifyContent:'space-around',
        paddingVertical:10,
        paddingHorizontal:10       
    },
    text1:{
        color:colors.black,
        fontSize:22,
        fontWeight:'bold'
    },
    view2:{
        width:'50%'
    }
})