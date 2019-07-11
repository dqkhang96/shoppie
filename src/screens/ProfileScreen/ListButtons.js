import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/ProfileScreen/ListButtons';

class ListButtons extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftButtonContent}>
            <View style={styles.leftIcon}><SimpleLineIcons name="social-dropbox" size={18} /></View>
            <View style={styles.textContainer}>
              <Text style={styles.title}> {CustomI18n.t('Profile').order} </Text>
              <Text style={styles.description}> {CustomI18n.t('Profile').description1} </Text>
            </View>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="bookmark" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {CustomI18n.t('Profile').wishlist} </Text>
            <Text style={styles.description}> {CustomI18n.t('Profile').description2} </Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="award" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {CustomI18n.t('Profile').points} </Text>
            <Text style={styles.description}> {CustomI18n.t('Profile').description3} </Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><SimpleLineIcons name="home" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {CustomI18n.t('Profile').address} </Text>
            <Text style={styles.description}> {CustomI18n.t('Profile').description4} </Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 10, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><Foundation name="page-edit" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {CustomI18n.t('Profile').details} </Text>
            <Text style={styles.description}> {CustomI18n.t('Profile').description5} </Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => {this.props.navigation.navigate('Settings') }}>
          <View style={styles.leftIcon}><Feather name="settings" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}> {CustomI18n.t('Profile').settings} </Text>
            <Text style={styles.description}> {CustomI18n.t('Profile').description6} </Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(ListButtons);