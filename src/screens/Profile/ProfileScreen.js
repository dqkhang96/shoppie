import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import stateStorage from '../../config/stateStorage';
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'
import BasicInfo from './BasicInfo';
import SignoutButton from './SignoutButton';
import ListButtons from './ListButtons';

import BagAndWishListButtons from '../../components/BagAndWishListButtons'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
        <View style={{ flex: 1}}>  
          <ButtonBackAndButtonMenu/>
        </View>),
      title: "   Profile",
      headerRight: <BagAndWishListButtons />
    }
  }

  onBack = () => {
    // let resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.init({ routeName: 'Home' }),
    //   ]
    // });
    // this.props.navigation.dispatch(resetAction);

    // this.props.navigation.navigate('Home');

    // this.props.navigation.dispatch(NavigationActions.back())

    // const backAction = NavigationActions.back({
    //   key: null
    // }) 

    // this.props.navigation.dispatch(backAction);
    alert(this.props.navigation.state.key)

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <BasicInfo />
        <ListButtons />
        <SignoutButton />
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
})                                                                