import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { changeLanguage } from '../../util/i18n'
import { connect } from 'react-redux'
import { switchLanguage } from '../../redux/actions'
import AsyncStorage from '@react-native-community/async-storage';
import Color from '../../theme/colors';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoadingVI: false,
      isLoadingEN: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoadingVI
        ? <ActivityIndicator size='large' color={Color.primary}/>
        : <TouchableOpacity style={styles.button} onPress={async() => {
          this.setState({isLoadingVI: true})
          changeLanguage("vi-VN"); 
          await AsyncStorage.setItem("lang","vi-VN")
          this.props.switchLanguage("vi-VN")
        }}>
          <Text>Change to Vietnamese</Text>
        </TouchableOpacity>}
        {this.state.isLoadingEN
        ? <ActivityIndicator size='large' color={Color.primary} />
        : <TouchableOpacity style={styles.button} onPress={async() => {
          this.setState({isLoadingEN: true})
          changeLanguage("en-GB"); 
          await AsyncStorage.setItem("lang","en-GB")
          this.props.switchLanguage("en-GB")
        }}>
          <Text>Change to English</Text>
        </TouchableOpacity>}
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