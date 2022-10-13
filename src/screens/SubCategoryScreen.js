import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../components/Header";
import { SubCatCard } from "../components/SubCatCard";
import { categories } from "../global/data";
export class SubCategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subCat: categories[this.props.route.params.index].subCategory
        }
    }
    render() {
        const { index } = this.props.route.params
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header
                        title={categories[index].name}
                        iconName='arrow-left'
                        navigation={this.props.navigation}
                    />
                </View>
                <ScrollView>
                    <View>
                        {
                            this.state.subCat.map(item =>
                                <View key={item.id}>
                                    <TouchableOpacity onPress={()=>{
                                        const n=item.id;
                                        this.props.navigation.navigate("PreferencesScreen",{index,n})
                                        }}>
                                        <SubCatCard
                                            subCatImg={categories[index].subCategory[item.id].image}
                                            title={categories[index].subCategory[item.id].name}
                                            description={categories[index].subCategory[item.id].description}
                                            prc={categories[index].subCategory[item.id].price}

                                        />
                                    </TouchableOpacity>

                                </View>



                            )
                        }

                    </View>
                </ScrollView>

            </View>
        )
    }
}

