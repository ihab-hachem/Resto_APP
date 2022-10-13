import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from "../global/style"
import { Icon, CheckBox } from "react-native-elements";

export function PlacedOrderScreen({navigation}){
    return(
        <View style={styles.view1}>
            <Icon
                name="checkbox-marked-circle"
                type="material-community"
                size={150}
                color={colors.white}
            />
            <View style={{width:'95%',justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.text1}>
                Your order is successfully placed
            </Text>
            
            </View>
            <View>
                <TouchableOpacity style={styles.track}>
                    <Icon
                        name="map-marker"
                        type="material-community"
                        color={colors.white}
                        size={40}
                    />
                    <Text style={styles.text2}>
                        Track your order
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.track}
                onPress={()=>{
                    navigation.navigate("HomeScreen")
                }}
                >
                    <Icon
                        name="home"
                        type="material-community"
                        color={colors.white}
                        size={40}
                    />
                    <Text style={styles.text2}>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    view1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.blue1
    },
    text1:{
        color:colors.white,
        fontSize:30,
        fontWeight:'bold',
        
    },
    text2:{
        color:colors.white,
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5
        
    },
    track:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:colors.white,
        padding:10,
        borderRadius:25,
        marginTop:15
    }
})