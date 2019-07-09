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
              <Text style={styles.title}>Order</Text>
              <Text style={styles.description}>Check your order status</Text>
            </View>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="bookmark" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Wishlist</Text>
            <Text style={styles.description}>Your most loved styles & collections</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="award" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Shoppie Points</Text>
            <Text style={styles.description}>Earn points & use in checkout</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><SimpleLineIcons name="home" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.description}>Save addresses for a hassle free checkout</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 10, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><Foundation name="page-edit" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Profile Details</Text>
            <Text style={styles.description}>Changes your profile & password</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderBottomWidth: 1, }]} onPress={() => { }}>
          <View style={styles.leftIcon}><Feather name="settings" size={18} /></View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.description}>Manage notifications & app settings</Text>
          </View>
          <View style={styles.rightIcon}><Ionicons name="ios-arrow-forward" size={20} /></View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(ListButtons);