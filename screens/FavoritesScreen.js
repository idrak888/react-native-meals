import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';

const IoniconsHeaderButton = passMeFurther => (
    <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="white" />
);

const FavoritesScreen = props => {
    const renderMeal = itemData => {
        return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    props.navigation.navigate({routeName: 'MealDetails', params: {title: itemData.item.title}})
                }}>
                    <View style={styles.mealItem}>
                        <ImageBackground source={{uri: itemData.item.imageUrl}} style={styles.image}>
                            <Text style={styles.title}>{itemData.item.title}</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%'}} data={props.favoriteMeals} renderItem={data => renderMeal(data)}/>
        </View>
    )
} 

FavoritesScreen.navigationOptions = navdata => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navdata.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ), 
        headerStyle: {
            backgroundColor: '#D62960'
        },
        headerTintColor: 'white'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealItem: {
        height: 200,
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 20,
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10
    }
});


function mapStateToProps(state, ownProps) {
    return { favoriteMeals: state.meals.favoriteMeals }
  }

export default connect(mapStateToProps, null)(FavoritesScreen);