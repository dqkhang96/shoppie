import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import CustomCarousel from './CustomCarousel';
import IconAndDescription from './IconAndDescription';
import ButtonContainer from './ButtonContainer';

// Import styles
import styles from '../../theme/screens/OnboardingScreen/OnboardingScreen';

// Import redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';


class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <IconAndDescription />
        <CustomCarousel />
        <ButtonContainer />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(OnboardingScreen);