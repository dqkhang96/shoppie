import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import stateStorage from '../config/stateStorage';

class HeadBar extends Component {
  onBack = () => {
    this.props.navigation.goBack();
  }

  onNavigationList = () => {

  }

  render() {
    return (
      <View style={styles.headBarContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={this.onBack} style={styles.icon}>
            <Ionicons name="md-arrow-back" size={20} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onNavigationList} style={styles.icon}>
            <Foundation name="list" size={20} />
          </TouchableOpacity>

          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={this.onBack} style={styles.icon}>
            <Ionicons name="md-heart-empty" size={20} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onBack} style={styles.icon}>
            <SimpleLineIcons name="bag" size={16} />
            <View style={styles.notiBox}>
              <Text style={styles.notiBoxText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

HeadBar.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
}

const styles = StyleSheet.create({
  headBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: stateStorage.SCREEN_HEIGHT * 0.08,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  leftIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
    padding: 8,
  },
  title: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  notiBox: {
    height: 15,
    width: 15,
    backgroundColor: stateStorage.appColor,
    position: 'absolute',
    right: 0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notiBoxText: {
    color: 'white',
    fontSize: 12,
  }
})

export default withNavigation(HeadBar);