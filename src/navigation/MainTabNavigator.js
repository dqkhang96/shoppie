import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductScreen from '../screens/ProductScreen'
import CategoryScreen from '../screens/CategoryScreen'
import TopwearScreen from '../screens/TopwearScreen'
import BrandsScreen from '../screens/BrandsScreen'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import ProfileScreen from '../screens/Profile'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import ForgotPasswordScreen from '../screens/ForgotPassword'
import OnboardingScreen from '../screens/Onboarding'
import VerifyMobileScreen from '../screens/VerifyMobile'
import NotificationScreen from '../screens/Notification'
import { sp, wp } from '../untils'
import Icons from '../icons'
import CustomDrawerContentComponent from './SideMenu/CustomDrawerContentComponent'

const HomeStack = createStackNavigator({
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
    || (routeName == 'RegisterScreen'))
    tabBarVisible = false

  return {
    tabBarVisible,
    tabBarLabel: () => null,
    tabBarIcon: (
      <Icons.Home width={sp(5)} height={sp(5)} />
    ),
  }
};

const SearchStack = createStackNavigator({
  Category: CategoryScreen
})
SearchStack.navigationOptions = ({ navigation }) => {
  return ({
    tabBarLabel: () => null,
    tabBarIcon: (
      <Icons.Search width={sp(5)} height={sp(5)} />
    )
  }
  )
}
const CategoryStack = createStackNavigator(
  {
    Categories: CategoriesScreen,

  }
);

CategoryStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: (

    <Icons.List width={sp(5)} height={sp(5)} />

  ),
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  }
)

ProfileStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: (<Icons.Profile width={sp(5)} height={sp(5)} />)
}

const ShoppingBagStack = createStackNavigator(
  {
    Bag: BagAndWishListScreen
  }
)

ShoppingBagStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: (<Icons.Bag width={sp(5)} height={sp(5)} />)
}

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
