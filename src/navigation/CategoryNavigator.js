import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen'
import { sp, wp } from '../util'
import Icons from '../../res/icons'
export const CategoryStack = createStackNavigator(
    {
      Categories: CategoriesScreen,
  
    }
  );
  
  CategoryStack.navigationOptions = {
    tabBarLabel: () => null,
    tabBarIcon: ({tintColor})=>(
  
      <Icons.List width={sp(5)} height={sp(5)} fill={tintColor} />
  
    ),
    tabBarOptions:{
      activeTintColor:"#08D6CC"
    }
  };