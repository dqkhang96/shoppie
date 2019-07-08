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