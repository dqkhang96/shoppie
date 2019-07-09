import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen'
import { sp, wp } from '../util'
import Icons from '../../res/icons'
export const ProfileStack = createStackNavigator(
    {
      Profile: ProfileScreen,
    }
  )
  
  ProfileStack.navigationOptions = {
    tabBarLabel: () => null,
    tabBarIcon: ({tintColor})=>(<Icons.Profile width={sp(5)} height={sp(5)} fill={tintColor} />),
    tabBarOptions:{
      activeTintColor:"#08D6CC"
    }
  }
  