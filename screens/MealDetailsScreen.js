import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import meals from '../data/meals';

import { connect } from 'react-redux';

const IoniconsHeaderButton = passMeFurther => (
    <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="white" />
);

var globalProps;

const MealDetailsScreen = props => {
    const meal = meals.filter(meal => meal.title == props.navigation.getParam('title'));
    globalProps = props;
    return (
        <ScrollView>
            <Image source={{uri: meal[0].imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>Categories: </Text><Text style={{fontFamily: 'open-sans-bold', color: 'grey'}}>{meal[0].categories.join(', ')}</Text>
                <Text style={{fontFamily: 'open-sans-bold', fontSize: 27, marginVertical: 15}}>Instructions</Text>
                <Text style={{fontSize: 20, paddingHorizontal: 10}}>{meal[0].instructions}</Text>
            </View>
        </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = navData => {
    const title = navData.navigation.getParam('title');
    return {
        headerTitle: title,
        headerStyle: {
            backgroundColor: '#D62960'
        },
        headerTintColor: 'white',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <Item title="Favorite" iconName="ios-star" onPress={() => {
                  var favMeal = globalProps.favoriteMeals.find(meal => meal.title == title);
                  if (favMeal) {
                    alert ('Removed from favorites');
                  } else {
                    alert ('Added to favorites!');
                  }
                  globalProps.toggleFavorite(title);
                
              }} />
            </HeaderButtons>
        )    
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        alignItems: 'center',
        padding: 15,
        justifyContent: 'space-around'
    }
});

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      toggleFavorite: title => dispatch({ type: 'TOGGLE_FAVORITE', mealTitle: title })
    }
}

const mapStateToProps = state => {
    return { favoriteMeals: state.meals.favoriteMeals };
}

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsScreen);