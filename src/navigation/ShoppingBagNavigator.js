import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import { sp, wp } from '../util'
import Icons from '../../res/icons'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
export const ShoppingBagStack = createStackNavigator(
    {
      Bag: BagAndWishListScreen,
      Payment:PaymentScreen
    }
  )
  
  ShoppingBagStack.navigationOptions = {
    tabBarLabel: () => null,
    tabBarIcon:({tintColor})=>(<Icons.Bag width={sp(5)} height={sp(5)} fill={tintColor} />),
    tabBarOptions:{
      activeTintColor:"#08D6CC"
    }
  }
  