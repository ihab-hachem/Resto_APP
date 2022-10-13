import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CategoryCard } from "../components/CategoryCard";
import Header from "../components/Header";
import { SearchComponent } from "../components/SearchComponent";
import { categories } from "../global/data";
import { colors } from "../global/style";
export function SearchScreen({navigation}) {
    return (
        <View >
        <Header iconName='arrow-left' navigation={navigation} title='Search'/>
            <SearchComponent/>
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
        height:'75%'
    }
})