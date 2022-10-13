import React from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters} from '../global/style';
import { Icon } from "react-native-elements";

export default function HomeHeader(){
    return(
        <View style={styles.header}>
            <Icon
                name="home"
                type="material-community"
                size={40}
                color={colors.white}
            />
           <Text style={styles.text1}>B r o a d  Way</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',    
        backgroundColor:colors.blue1,
        height:parameters.headerHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    text1:{
        color:colors.white,
        fontSize:32,
        fontWeight:'bold',
        marginLeft:10
    }
   
})