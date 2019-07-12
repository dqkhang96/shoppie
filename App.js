
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

//import redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';
import AsyncStorage from '@react-native-community/async-storage';
import CustomI18n from './src/util/i18n'
import AppNavigator from './src/navigation/AppNavigator';
import thunk from 'redux-thunk';
import * as RNLocalize from "react-native-localize";

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      lang: store.getState().app.lang,
      showAppNavigation: false
    }
  }

  componentWillMount() {
    AsyncStorage.getItem("lang").then(lang=>{
      CustomI18n.locale = lang
        this.setState({showAppNavigation:true}) 
    }).catch(err=>{
      this.setState({lang:locales[0].languageTag,showAppNavigation:true})
      const locales = RNLocalize.getLocales();
      if (Array.isArray(locales)) {
        CustomI18n.locale = locales[0].languageTag;   // For example: "vi-VN" or "en-GB"
      }
    })
  }

  componentDidMount() {
    store.subscribe(() => {
      if (this.state.lang !== store.getState().app.lang) {
        this.setState({ lang: store.getState().app.lang, showAppNavigation: false }, () => this.setState({ showAppNavigation: true }))
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {this.state.showAppNavigation ? <AppNavigator /> : null}
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
