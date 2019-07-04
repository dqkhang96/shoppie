import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import stateStorage from '../../config/stateStorage';
import BackXButton from '../../components/BackXButton';
import ListItems from './ListItems';
import ContinueButton from './ContinueButton';
import ColoredButton from '../../components/ColoredButton';

class NotificationScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }

  onContinue = async () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <BackXButton />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Enable Notifications and we will inform you about:</Text>
          <ListItems />
        </View>
        <View style={styles.buttonContainer}>
          <ColoredButton title='Continue' method={this.onContinue}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 15,
    height: stateStorage.SCREEN_HEIGHT * 0.6,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  buttonContainer: {
    padding: 10,
    height: stateStorage.SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
  },
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(NotificationScreen);