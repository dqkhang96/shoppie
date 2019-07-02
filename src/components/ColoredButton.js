import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../config/stateStorage';
import PropTypes from 'prop-types';

export default class ColoredButton extends Component {
  render() {
    return (
      <View style={styles.coloredButtonsContainer}>
        <TouchableOpacity
          style={styles.coloredButton}
          onPress={this.props.method}
        >
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ColoredButton.propTypes = {
  title: PropTypes.string,
  method: PropTypes.func,
}

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'white',
    textAlign: 'center'
  },
  coloredButtonsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  coloredButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})