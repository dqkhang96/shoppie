import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductScreen from '../screens/ProductScreen'
import CategoryScreen from '../screens/CategoryScreen'
import TopwearScreen from '../screens/TopwearScreen'
import BrandsScreen from '../screens/BrandsScreen'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'
import Icons from '../icons'
import { sp } from '../untils';


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
    tabBarLabel: 'Home',
    tabBarIcon: (<Icons.Home height ={15} width={15}  ></Icons.Home>)
  }
};

const CategoryStack = createStackNavigator(
  {
    Categories: CategoriesScreen,

  }
);

CategoryStack.navigationOptions = {
  tabBarLabel: 'Category',
  tabBarIcon: (<Icons.Search height ={15} width={15}></Icons.Search>)
  
};

CategoryStack.path = '';

const ParentStack = createBottomTabNavigator({
  HomeStack,
  CategoryStack,
})
ParentStack.navigationOptions = { 

}
const tabNavigator = createDrawerNavigator({
  ParentStack,
}, {
    contentComponent: props =>(
      <ScrollView>
        <DrawerItems {...props} />
        <Text>Your Own Footer Area After</Text>
      </ScrollView>),
      drawerWidth:100

  })


export default tabNavigator;
