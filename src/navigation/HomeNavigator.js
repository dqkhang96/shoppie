import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen'
import TopwearScreen from '../screens/TopwearScreen/TopwearScreen'
import BrandsScreen from '../screens/BrandsScreen/BrandsScreen'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import ProfileScreen from '../screens/ProfileScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import VerifyMobileScreen from '../screens/VerifyMobileScreen'
import NotificationScreen from '../screens/NotificationScreen'
import Icons from '../../res/icons'
import Color from '../theme/colors'
import Size from '../theme/sizes'


export const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Product: {
    screen: ProductScreen,
  },
  Topwear: TopwearScreen,
  Category: CategoryScreen,
  BagAndWishList: BagAndWishListScreen,
  Brands: BrandsScreen,
  Login: {
    screen: LoginScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Notification: {
    screen: NotificationScreen,
  },
  Verify: {
    screen: VerifyMobileScreen,
  },
  Onboard: {
    screen: OnboardingScreen,
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  const routeName = navigation.state.routes[navigation.state.index].routeName
  if ((routeName == 'Product') || (routeName == 'Login') || (routeName == 'Profile')
    || (routeName == 'Notification') || (routeName == 'Onboard') || (routeName == 'ForgotPassword')
    || (routeName == 'Register') || (routeName == 'Verify'))
    tabBarVisible = false

  return {
    tabBarVisible,
    tabBarLabel: () => null,
    tabBarIcon: ({ tintColor }) => (
      <Icons.Home width={Size.TabIcon.width} height={Size.TabIcon.width} fill={tintColor}/>
    ),
    tabBarOptions: {
      activeTintColor: Color.primary
    }
  }
};