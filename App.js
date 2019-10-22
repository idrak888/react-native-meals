import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './store/reducers/meals';

export default class App extends Component {
  state = {
    fontsLoaded: false
  }

  reducer = combineReducers({
    meals: mealsReducer
  });

  store = createStore(this.reducer);

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
    this.setState({fontsLoaded:true});
  }

  render() {
    let content;
    
    if (this.state.fontsLoaded) {
      content = <MealsNavigator/>
      
    } else {
      content = <Text></Text>
    }

    return <Provider store={this.store}>{content}</Provider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
