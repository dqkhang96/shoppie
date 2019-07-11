import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { changeLanguage } from '../../util/i18n'
import { connect } from 'react-redux'
import { switchLanguage } from '../../redux/actions'
import AsyncStorage from '@react-native-community/async-storage';

class SettingsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={async() => {
          changeLanguage("vi-VN"); 
          await AsyncStorage.setItem("lang","vi-VN")
          this.props.switchLanguage("vi-VN")
        }}>
          <Text>Change to Vietnamese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={async() => {
          changeLanguage("en-GB"); 
          await AsyncStorage.setItem("lang","en-GB")
          this.props.switchLanguage("en-GB")
        }}>
          <Text>Change to English</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'brown',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
})

const mapDispatchToProps = (dispatch) => ({
  switchLanguage: (lang) => dispatch(switchLanguage(lang))
})


export default connect(null, mapDispatchToProps)(SettingsScreen)