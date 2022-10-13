import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { orders } from '../global/data'
import { colors } from '../global/style'
import { Icon } from 'react-native-elements'

const DriverOrderCard = ({itemName,custName,ordNb,prc,qtty,time,pn,id}) => {
    return (
        <View style={styles.view2}>
            <View style={styles.view1}>
                <View >
                    <Text style={styles.text1}>
                        Order Nb
                    </Text>
                    <Text style={styles.text1}>
                        {itemName}
                    </Text>
                    <Text style={styles.text1}>
                        Quantity
                    </Text>
                    <Text style={styles.text1}>
                        Estimated Time
                    </Text>
                    <Text style={styles.text1}>
                        {custName}
                    </Text>
                </View>

                <View>
                    <Text style={styles.text2}>
                        {ordNb}
                    </Text>
                    <Text style={styles.text2}>
                        $ {prc}
                    </Text>
                    <Text style={styles.text2}>
                        {qtty}
                    </Text>
                    <Text style={styles.text2}>
                        {time}
                    </Text>
                    <Text style={styles.text2}>
                        {pn}
                    </Text>
                </View>

            </View>
            <View style={styles.view3}>
                <View>
                    <Text style={styles.text1}>
                        Preferences :
                    </Text>

                    <View>
                        {
                            orders.map(item =>
                                <View key={orders.indexOf(item)}>
                                    {
                                        item.oderId === id &&
                                        <View>
                                            {
                                                item.orderedItem.preference.map(items =>
                                                    <View key={item.orderedItem.preference.indexOf(items)}>
                                                        <Text style={styles.text2}>
                                                            {items}
                                                        </Text>
                                                    </View>
                                                )
                                            }
                                        </View>
                                    }
                                </View>
                            )
                        }
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon
                            name='map-marker'
                            type='material-community'
                            size={60}
                            color={colors.blue1}
                        />
                        <Text style={styles.text1}>
                            Go To Location
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.done}>
                        <Icon
                            name='checkbox-marked-circle'
                            type='material-community'
                            size={40}
                            color={colors.blue1}
                        />
                        <Text style={{...styles.text1,marginLeft:10}}>
                           Mark as done
                        </Text>
                    </TouchableOpacity>
        </View>
    )
}


export default DriverOrderCard

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '90%',

    },
    view2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: colors.grey2,
        borderRadius: 15,
        margin: 15,
        backgroundColor:colors.white
    },
    view3:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'85%',
        marginTop:10
    },
    text1:{
        color:colors.grey2,
        fontSize:18,
        fontWeight:'bold'
    },
    text2:{
        color:colors.grey2,
        fontSize:18,
    },
    done:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.grey2,
        borderRadius:20,
        width:'80%',
        marginVertical:10,
        padding:5
        }
   
})