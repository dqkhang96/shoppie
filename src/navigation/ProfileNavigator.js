import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen'
import { sp, wp } from '../util'
import Icons from '../../res/icons'
import Color from '../theme/colors';
export const ProfileStack = createStackNavigator(
    {
      Profile: ProfileScreen,
    }
  )
  
  ProfileStack.navigationOptions = {
    tabBarLabel: () => null,
    tabBarIcon: ({tintColor})=>(<Icons.Profile width={Size.TabIcon.width} height={Size.TabIcon.width} fill={tintColor} />),
    tabBarOptions:{
      activeTintColor:Color.primary
    }
  }
  