import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/NotificationScreen/ListItems';

export default class ListItems extends Component {
  render() {
    return (
      <View>
        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="box" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{CustomI18n.t('Notification').description1}</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="check-circle" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{CustomI18n.t('Notification').description2}</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><Feather name="calendar" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{CustomI18n.t('Notification').description3}</Text>
          </View>
        </View>

        <View style={styles.item} >
          <View style={styles.leftIcon}><MaterialCommunityIcons name="hanger" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{CustomI18n.t('Notification').description4}</Text>
          </View>
        </View>

      </View>
    )
  }
}