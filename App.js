

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Transaction: { screen: BookTransactionScreen },
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Transaction') {
          return (
            <Image
              source={require('./assets/book.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'Search') {
          return (
            <Image
              source={require('./assets/searchingbook.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

var AppNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(AppNavigator);
