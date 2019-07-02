import React, { Component } from 'react';
import MenDrawerComponent from  './MenDrawerComponent'
import Profile from './Profile.js'
import CartComponent from '../Tabbar/CartComponent'
import HomeComponent from '../Tabbar/HomeComponent'
import ListComponent from '../Tabbar/ListComponent'
import SearchComponent from '../Tabbar/SearchComponent'
import UserComponent from '../Tabbar/UserComponent.js'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MenScreen from '../../screens/MenScreen'
import WomenScreen from '../../screens/WomenScreen'
import ProductScreen from '../../screens/ProductScreen'
import { AppRegistry, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');

import {createAppContainer,createBottomTabNavigator,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
const HomeStack = createStackNavigator(
    {
      Home: HomeComponent,
      Men :MenScreen,
      Women:WomenScreen,
      Product : ProductScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  HomeStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const navigationOptions = {};
    navigationOptions.tabBarIcon = () => (
        <Ionicons 
               name="ios-home"
               size={30}
               color={'#B8B8B8'}>
             </Ionicons>
     );
    if (routeName === 'Home' || routeName === 'List' || routeName === 'Men' ) {
    //   navigationOptions.tabBarVisible = true;
      navigationOptions.initialRouteName = "Men";
    }
  
    return navigationOptions;
  };
  const TabNavigator = createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Search:{screen:SearchComponent},
      List :{screen :ListComponent},
      Cart: { screen: CartComponent },
      User: { screen: UserComponent },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: ({ navigation }) => ({
        drawerLabel:()=>null
      }),
      tabBarOptions: {
        style: {
          backgroundColor: 'rgb(34,35,38)',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
        },
        labelStyle: { fontWeight: '400' },
        activeTintColor: 'white',
        inactiveTintColor: 'rgb(122,123,125)',
      },
    }
  )
  
  const MainNavigator = createDrawerNavigator({ TabNavigator}, { contentComponent: Profile ,drawerWidth:width*0.75},

    )
  export const RootSwitch = createSwitchNavigator({  MainNavigator});