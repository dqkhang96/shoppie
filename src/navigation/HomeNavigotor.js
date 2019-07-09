import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen'
import TopwearScreen from '../screens/TopwearScreen/TopwearScreen'
import BrandsScreen from '../screens/BrandsScreen/BrandsScreen'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import ProfileScreen from '../screens/Profile'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import ForgotPasswordScreen from '../screens/ForgotPassword'
import OnboardingScreen from '../screens/Onboarding'
import VerifyMobileScreen from '../screens/VerifyMobile'
import NotificationScreen from '../screens/Notification'
import { Size } from '../theme/sizes'
import Icons from '../../res/icons'
import Color from '../theme/colors';
export const HomeStack = createStackNavigator({
  
  Topwear: TopwearScreen,
   
    Home: {
      screen: HomeScreen,
    },
  
    Product: {
      screen: ProductScreen,
    },
   
    BagAndWishList: BagAndWishListScreen,
    Brands: BrandsScreen,
    Login: {
      screen: LoginScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Category: CategoryScreen,
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
      || (routeName == 'RegisterScreen'))
      tabBarVisible = false
  
    return {
      tabBarVisible,
      tabBarLabel: () => null,
      tabBarIcon: ({tintColor})=>(
        <Icons.Home width={Size.TabIcon.width} height={Size.TabIcon.width} fill={tintColor}/>
      ),
      tabBarOptions:{
        activeTintColor:Color.primary
      }
    }
  };