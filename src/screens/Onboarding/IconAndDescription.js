import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import stateStorage from '../../config/stateStorage';

class IconAndDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.iconAndDesContainer}>
        <View style={styles.appIconContainer} />
        {this.props.currentIndex == 0 ? <Text style={styles.text}>Treat yourself with great and updated collections</Text>
          : this.props.currentIndex == 1 ? <Text style={styles.text}>The most fulfilling shopping experience</Text>
            : <Text style={styles.text}>Free beauty samples what they are and how to find them</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconAndDesContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: stateStorage.appColor,
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(IconAndDescription);