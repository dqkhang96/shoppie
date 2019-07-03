import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import stateStorage from '../../config/stateStorage';
import HeadBar from '../../components/HeadBar';
import BasicInfo from './BasicInfo';
import SignoutButton from './SignoutButton';
import ListButtons from './ListButtons';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeadBar title="Profile" />
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