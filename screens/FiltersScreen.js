import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const IoniconsHeaderButton = passMeFurther => (
    <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="white" />
);

class FiltersScreen extends React.Component {
    state = {
        isGlutenFree: false,
        isVegetarian: false,
        isLactoseFree: false
    }
    render () {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Available filters</Text>
                <View style={styles.filterContainer}>
                    <Text>Gluten-free</Text>
                    <Switch 
                        trackColor={{true:'#D62960'}}
                        thumbColor={'#D62960'}
                        value={this.state.isGlutenFree} 
                        onValueChange={newValue => {
                            this.setState({isGlutenFree: newValue})
                        }}
                    />
                </View>
                <View style={styles.filterContainer}>
                    <Text>Vegetarian</Text>
                    <Switch 
                        trackColor={{true:'#D62960'}}
                        thumbColor={'#D62960'}
                        value={this.state.isVegetarian} 
                        onValueChange={newValue => {
                            this.setState({isVegetarian: newValue})
                        }}
                    />
                </View>
                <View style={styles.filterContainer}>
                    <Text>Lactose-free</Text>
                    <Switch 
                        trackColor={{true:'#D62960'}}
                        thumbColor={'#D62960'}
                        value={this.state.isLactoseFree} 
                        onValueChange={newValue => {
                            this.setState({isLactoseFree: newValue})
                        }}
                    />
                </View>
            </View>
        )
    }
} 

FiltersScreen.navigationOptions = navdata => {
    return {
        headerTitle: 'Filters',
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
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginTop: 12
    }
});

export default FiltersScreen;