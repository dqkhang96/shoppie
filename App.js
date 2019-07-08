
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem'

//import redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';

import AppNavigator from './src/navigation/AppNavigator';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default function App(props) {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </Provider>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
