import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text>Change to Vietnamese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
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