import React, { Component } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stateStorage from '../config/stateStorage';

export default class BackXButton extends Component {
  onBack = () => {

  }

  render() {
    return (
      Platform.OS == 'android'
        ? <View style={styles.backXButtonContainer} />
        : <View style={styles.backXButtonContainer}>
          <TouchableOpacity onPress={this.onBack}>
            <Ionicons name='ios-close' size={25} />
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  backXButtonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.08,
    paddingHorizontal: 18,
    paddingTop: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },
})                                                        