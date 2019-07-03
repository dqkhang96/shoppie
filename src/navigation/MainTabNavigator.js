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
    BagAndWishList: BagAndWishListScreen,
  },
  Product: {
    screen: ProductScreen,
  },
  Topwear: TopwearScreen,
  Category: CategoryScreen,
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
    tabBarIcon: ({tintColor,focused})=>(
      <Icons.Home width={sp(5)} height={sp(5)} fill={tintColor} active={focused}/>
    ),
    tabBarOptions:{activeTintColor:"#08D6CC"}
  }
};

const SearchStack = createStackNavigator({
  Category:CategoryScreen
})
SearchStack.navigationOptions = ({ navigation }) => {
  return ({
    tabBarLabel: () => null,
    tabBarIcon:  ({tintColor,focused})=>(
      <Icons.Search width={sp(5)} height={sp(5)}  fill={tintColor} active={focused}/>
    ),
    tabBarOptions:{activeTintColor:"#08D6CC"}
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
  tabBarIcon: ({tintColor,focused})=>(
    <Icons.List width={sp(5)} height={sp(5)} fill={tintColor} active={focused} />)
  ,
  tabBarOptions:{activeTintColor:"#08D6CC"}
};

const ProfileStack = createStackNavigator(
  {
    BagAndWishList:BagAndWishListScreen
  }
)

ProfileStack.navigationOptions={
  tabBarLabel:()=>null,
  tabBarIcon: ({tintColor,focused})=>(<Icons.Profile width={sp(5)} height={sp(5)} fill={tintColor} active={focused}/>)
}

const ShoppingBagStack = createStackNavigator(
  {
    Bag:BagAndWishListScreen
  }
)

ShoppingBagStack.navigationOptions={
  tabBarLabel:()=>null,
  tabBarIcon: ({tintColor,focused})=>
    (<Icons.Bag width={sp(5)} height={sp(5)} fill={tintColor} active={focused}/>),
  tabBarOptions:{activeTintColor:"#08D6CC"}
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