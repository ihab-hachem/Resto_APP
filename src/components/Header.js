import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters} from '../global/style';
import { Icon } from "react-native-elements";

export default function Header({navigation,title,iconName}){
    return(
        <View style={styles.header}>
            <Icon
                onPress={()=>{
                    navigation.goBack()
                }}
                name={iconName}
                type="material-community"
                size={30}
                color={colors.white}
            />
            <View style={{width:'85%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.text1}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',    
        backgroundColor:colors.blue1,
        height:parameters.headerHeight,
        alignItems:'center',
        paddingLeft:10
    },
    text1:{
        color:colors.white,
        fontSize:30,
        fontWeight:'bold'
    }
})