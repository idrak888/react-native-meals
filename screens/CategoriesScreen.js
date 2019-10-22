import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import categories from '../data/categories';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const IoniconsHeaderButton = passMeFurther => (
    <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="white" />
);

const CategoriesScreen = props => {
    const chooseCategory = data => {
        props.navigation.navigate({
            routeName:'Meals', params:{categoryId:data.item.category}
        });
    }
    return (
        <View style={styles.screen}>
            <FlatList 
                data={categories}
                renderItem={
                    data => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} style={{...styles.gridItem, borderColor: data.item.color}} onPress={() => chooseCategory(data)}>
                                <ImageBackground source={{uri: data.item.imageUrl}} style={styles.image}>
                                    <Text style={{fontFamily: 'open-sans-bold', fontSize: 18, padding: 12, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)'}}>{data.item.category}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }
                }
                numColumns={2}
            />
        </View>
        
    )
} 

CategoriesScreen.navigationOptions = navdata => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navdata.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ), 
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerStyle: {
            backgroundColor: '#D62960'
        },
        headerTintColor: 'white'
    }
}

const styles = StyleSheet.create({
    screen: {
        flexDirection:'row',
        flex: 1
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 200,
        borderRadius: 12,
        elevation: 6,
        borderWidth: 1,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default CategoriesScreen;