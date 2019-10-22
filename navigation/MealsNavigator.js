import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetails: MealDetailsScreen
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});

const TabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {tabBarIcon: info => <Ionicons name="ios-restaurant" size={25} color={info.tintColor}/>}},
    Favorites: {screen: FavoritesNavigator, navigationOptions: {tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor}/>}}
}, {
    tabBarOptions: {
        activeTintColor: '#D62960'
    }
});

const MainNavigator = createDrawerNavigator({
    TabNavigator: {screen: TabNavigator, navigationOptions: {drawerLabel: 'Meal Categories'}},
    FiltersScreen: {screen: FiltersNavigator, navigationOptions: {drawerLabel: 'Filters'}}
}, {
    contentOptions: {
        activeTintColor: '#D62960'
    }
});

export default createAppContainer(MainNavigator);