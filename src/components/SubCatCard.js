import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../global/style';
import { categories } from '../global/data'
import { Icon } from "react-native-elements";
const SCREEN_WIDTH=Dimensions.get('window').width;
export function SubCatCard({subCatImg, title,description,prc}){
    return(
        <View style={styles.view1}>
           <View>
               <Image
                    style={styles.imageStyle}
                    source={{ uri: subCatImg }}
               />
           </View>
           <View style={styles.view2}>
               <Text style={styles.text1}>{title}</Text>
               <Text style={styles.text2}>{description}</Text>
               <Text style={styles.text3}>$ {prc}</Text>
               <View style={styles.view3}>
               <Text style={styles.text4}>
                   More details
               </Text>
               <Icon
                   name="arrow-right"
                   type="material"
                   size={40}
                   color={colors.blue1}
               />
           </View>
           </View>
           
        </View>
    )
}

const styles=StyleSheet.create({
    view1:{
        flexDirection:'row',
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        padding: 10,
       
    },
    imageStyle:{
        width:130,
        height:130,
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.black,
        marginBottom:10
    },
    text2:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.grey2,
        marginBottom:10
    },
    text3:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.grey1,
        marginBottom:10
    },
    view2:{
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    view3:{
        flexDirection:'row',
        alignItems:'center',
    },
    text4:{
        fontSize:15,
        color:colors.grey3
    }
})