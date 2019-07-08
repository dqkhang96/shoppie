import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import { sp, wp } from '../util'
import Icons from '../../res/icons'
import SearchScreen from '../screens/SearchScreen/SearchScreen'


export const SearchStack = createStackNavigator({
    Search :SearchScreen,
    Product: {
      screen: ProductScreen,
    },
  })
  SearchStack.navigationOptions = ({ navigation }) => {
    return ({
      tabBarLabel: () => null,
      tabBarIcon:({tintColor})=> (
        <Icons.Search width={sp(5)} height={sp(5)} fill={tintColor} />
      ),
      tabBarOptions:{
        activeTintColor:"#08D6CC"
      }
    }
    )
  }