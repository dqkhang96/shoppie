import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu';
import BasicInfo from './BasicInfo';
import SignoutButton from './SignoutButton';
import ListButtons from './ListButtons';
import BagAndWishListButtons from '../../components/BagAndWishListButtons';
import CustomI18n from '../../util/i18n';
// Import styles
import styles from '../../theme/screens/ProfileScreen/ProfileScreen';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{ flex: 1 }}>
          <ButtonBackAndButtonMenu />
        </View>),
      title: '    ' + CustomI18n.t('Navigation').Profile,
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