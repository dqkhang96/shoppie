import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import styles
import styles from '../../theme/screens/NotificationScreen/ListItems';

export default class ListItems extends Component {
  render() {
    return (
      <View>
        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="box" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>Order tracking</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="check-circle" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>Items availability</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="calendar" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>Special events & Offers</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><MaterialCommunityIcons name="hanger" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>Fitting room reservations on selected stores</Text>
          </View>
        </View>

      </View>
    )
  }
}