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
import { sp, wp } from '../untils'
import Icons from '../icons'
import Profile from '../navigation/SideMenu/Profile'

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

});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  const routeName = navigation.state.routes[navigation.state.index].routeName
  if (routeName == 'Product')
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
  Category:CategoryScreen
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
    BagAndWishList:BagAndWishListScreen
  }
)

ProfileStack.navigationOptions={
  tabBarLabel:()=>null,
  tabBarIcon:(<Icons.Profile width={sp(5)} height={sp(5)}/>)
}

const ShoppingBagStack = createStackNavigator(
  {
    Bag:BagAndWishListScreen
  }
)

ShoppingBagStack.navigationOptions={
  tabBarLabel:()=>null,
  tabBarIcon:(<Icons.Bag width={sp(5)} height={sp(5)}/>)
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
    contentComponent: Profile,
    drawerWidth: wp(75)

  })


export default tabNavigator;
