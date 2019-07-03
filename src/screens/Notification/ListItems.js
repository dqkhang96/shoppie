import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import stateStorage from '../../config/stateStorage';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ListItems extends Component {
  render() {
    return (
      <View>
        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="box" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Order tracking</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="check-circle" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Items availability</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="calendar" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Special events & Offers</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><MaterialCommunityIcons name="hanger" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Fitting room reservations on selected stores</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    paddingVertical: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftIcon: {
    width: stateStorage.SCREEN_WIDTH * 0.1,
    paddingRight: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    width: stateStorage.SCREEN_WIDTH * 0.8,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  description: {
    fontSize: 12,
  },
})