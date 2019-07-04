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
import HeadBar from '../../components/HeadBar';
import BasicInfo from './BasicInfo';
import SignoutButton from './SignoutButton';
import ListButtons from './ListButtons';

import { NavigationActions } from 'react-navigation';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
    // headerTitle: <Text>Nhau</Text>,
    // headerRight: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#fff"
    //   />
    // ),
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
        <HeadBar title="Profile" onBack={this.onBack} />
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