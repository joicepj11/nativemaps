import { AppRegistry } from 'react-native';
import GoogleMapPlayground from './App';
import HomeScreen from './HomeScreen';
import NotifyScreen from './NotifyScreen';
import OrderScreen from './OrderScreen';
import OrderButton from './components/OrderButton';
import React, { Component } from 'react';
// import Expo from 'expo';
import {
    StackNavigator,
  } from 'react-navigation';

  const NavigationScreen = StackNavigator({
    Home: { screen: HomeScreen },
    Order: { screen: OrderScreen },
    Notification: { screen: NotifyScreen},
   }, {
      navigationOptions:{
        headerStyle:{
          marginTop: 2
        }
      }
    });

    export default class App extends Component {   
        render() {   
          return (
            <NavigationScreen/>
          );
        }
      }

AppRegistry.registerComponent('nativemaps', () =>App);