import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import meals from '../data/meals';

const MealsScreen = props => {
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

    const displayedMeals = meals.filter(
        meal => meal.categories.indexOf(props.navigation.getParam('categoryId')) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%'}} data={displayedMeals} renderItem={data => renderMeal(data)}/>
        </View>
    )
} 

MealsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('categoryId'),
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

export default MealsScreen;