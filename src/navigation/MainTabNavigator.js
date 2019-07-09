import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { sp, wp } from '../theme/sizes'
import CustomDrawerContentComponent from '../navigation/SideMenu/CustomDrawerContentComponent'
import {HomeStack} from './HomeNavigotor'
import {SearchStack} from './SearchNavigator'
import {CategoryStack} from './CategoryNavigator'
import {ProfileStack} from './ProfileNavigator'
import {ShoppingBagStack} from './ShoppingBagNavigator';

const ParentStack = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  CategoryStack,
  ShoppingBagStack,
  ProfileStack,
})
ParentStack.navigationOptions = {

}
const tabNavigator = createDrawerNavigator({
  ParentStack,
}, {
    contentComponent: () => <CustomDrawerContentComponent />,
    drawerWidth: wp(75)

  })


export default tabNavigator;
