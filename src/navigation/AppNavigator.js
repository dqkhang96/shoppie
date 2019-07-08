import React from 'react';
import { createAppContainer, createSwitchNavigator ,createDrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
);
