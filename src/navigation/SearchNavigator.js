import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import { Size } from '../theme/sizes'
import Icons from '../../res/icons'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import Color from '../theme/colors';


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
        <Icons.Search width={Size.TabIcon.width} height={Size.TabIcon.width} fill={tintColor} />
      ),
      tabBarOptions:{
        activeTintColor:Color.primary
      }
    }
    )
  }