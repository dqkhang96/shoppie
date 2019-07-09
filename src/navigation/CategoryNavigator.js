import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen'
import Size from '../theme/sizes'
import Color from '../theme/colors'
import Icons from '../../res/icons'
export const CategoryStack = createStackNavigator(
  {
    Categories: CategoriesScreen,

  }
);

CategoryStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ tintColor }) => (

    <Icons.List width={Size.TabIcon.width} height={Size.TabIcon.height} fill={tintColor} />

  ),
  tabBarOptions: {
    activeTintColor: Color.primary
  }
};