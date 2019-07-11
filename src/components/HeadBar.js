import React, { Component } from 'react';
import {
  View,
  Text,

} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation, Header } from 'react-navigation';
import styles from '../theme/components/HeadBar'


class HeadBar extends Component {
  onBack = () => {
    this.props.navigation.goBack();
  }

  onNavigationList = () => {

  }

  render() {
    const { headerLeft, headerRight, headerTitle, title } = this.props
    return (
      <View style={styles.headBarContainer}>
        <View style={styles.headerLeft}>
            {headerLeft ? headerLeft : null}
        </View>
        <View style={styles.headerTitle}>
          {headerTitle ? headerTitle : (
            title ? <Text style={styles.headerTitleText}>{title}</Text> : null
          )}
        </View>
        <View style={styles.headerRight}>
          {headerRight ? headerRight : null}
        </View>
      </View>
    );
  }
}

HeadBar.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
}



export default withNavigation(HeadBar);