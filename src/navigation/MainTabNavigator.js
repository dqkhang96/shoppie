import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, Text } from 'react-native'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductScreen from '../screens/ProductScreen'
import CategoryScreen from '../screens/CategoryScreen'
import TopwearScreen from '../screens/TopwearScreen'
import BrandsScreen from '../screens/BrandsScreen'
import BagAndWishListScreen from '../screens/BagAndWishListScreen'


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
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  }
};

const CategoryStack = createStackNavigator(
  {
    Categories: CategoriesScreen,

  }
);

CategoryStack.navigationOptions = {
  tabBarLabel: 'Category',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

CategoryStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ParentStack = createBottomTabNavigator({
  HomeStack,
  CategoryStack,
  SettingsStack,
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
