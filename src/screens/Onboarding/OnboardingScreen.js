import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

//import redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import stateStorage from '../../config/stateStorage';
import CustomCarousel from './CustomCarousel';
import IconAndDescription from './IconAndDescription';
import ButtonContainer from './ButtonContainer';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(OnboardingScreen);