import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { colors } from '../global/style'

const DriverCard = ({ordNb,custName,pn,tot}) => {
    return (
        <View style={styles.view4}>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.text1}>Order Nb:</Text>
                </View>
                <View>
                    <Text style={styles.text2}>
                        {ordNb}
                    </Text>
                </View>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.text1}>Customer:</Text>
                </View>
                <View>
                    <Text style={styles.text2}>
                        {custName}
                    </Text>
                </View>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.text1} >Phone number:</Text>
                </View>
                <View>
                    <Text style={styles.text2}>
                       {pn}
                    </Text>
                </View>
            </View>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.text1}>Total:</Text>
                </View>
                <View>
                    <Text style={styles.text2}>
                       {tot}
                    </Text>
                </View>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity style={styles.loc}>
                    <Icon
                        name='map-marker'
                        type='material-community'
                        size={32}
                        color={colors.grey2}
                    />
                    <Text style={styles.text2}>
                        Go To Location
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DriverCard

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent:'center'
    },
    view2:{
        width:'50%'
    },
    loc:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:colors.blue1,
        borderRadius:15,
        padding:10,
        width:'60%'
    },
    view3:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
        marginTop:5
    },
    view4:{
        borderWidth:1,
        borderColor:colors.grey2,
        borderRadius:12,
        margin:5,
        padding:5,
        backgroundColor:colors.white
    },
    text1:{
        color:colors.grey2,
        fontSize:18,
        fontWeight:'bold'
    },
    text2:{
        color:colors.grey2,
        fontSize:18,
    }
    
})