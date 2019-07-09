import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import { Size } from '../theme/sizes'
import Icons from '../../res/icons'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import Color from '../theme/colors';
export const ShoppingBagStack = createStackNavigator(
    {
      Bag: BagAndWishListScreen,
      Payment:PaymentScreen
    }
  )
  
  ShoppingBagStack.navigationOptions = {
    tabBarLabel: () => null,
    tabBarIcon:({tintColor})=>(<Icons.Bag width={Size.TabIcon.width} height={Size.TabIcon.width} fill={tintColor} />),
    tabBarOptions:{
      activeTintColor:Color.primary
    }
  }
  