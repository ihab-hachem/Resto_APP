import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { CategoryCard } from "../components/CategoryCard";
import HomeHeader from "../components/HomeHeader";
import { categories } from "../global/data";
import { colors, parameters } from '../global/style'
const SCREEN_WIDTH=Dimensions.get('window').width;
export  function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, width:SCREEN_WIDTH }}>
            <HomeHeader />
            <View>
                <Text style={styles.text1}>
                    Categories
                </Text>
            </View>
            <View style={styles.view1}>
                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("SubCategoryScreen",{index})
                        }}>
                            <CategoryCard
                                imgUri={item.image}
                                name={item.name}
                            />
                        </TouchableOpacity>
                    )}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 25,
        color: colors.black,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    },
    view1: {
        marginTop: 5,
    }
})


