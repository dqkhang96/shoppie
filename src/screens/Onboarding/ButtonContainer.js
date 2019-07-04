import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import stateStorage from '../../config/stateStorage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ColoredButton from '../../components/ColoredButton';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
  }

  onNext = async () => {
    await this.props.tonextstep();
    global.carouselRef.snapToItem(this.props.currentIndex + 1);
  }

  onSkip = async () => {
    await this.props.to2step();
    global.carouselRef.snapToItem(2);
  }

  render() {
    return (
      this.props.currentIndex == 2
        ? <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { }} style={styles.startExploringButton}>
            <Text style={styles.text1}>Start Exploring</Text>
            <Ionicons name='ios-arrow-round-forward' size={25} color='white' />
          </TouchableOpacity>
        </View>
        :
        <View style={styles.buttonContainer}>
          <ColoredButton title='Next' method={this.onNext} />

          <TouchableOpacity onPress={this.onSkip} style={styles.button2}>
            <Text style={styles.text2}>Skip</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.2,
    paddingHorizontal: stateStorage.SCREEN_WIDTH * 0.2,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  text1: {
    fontSize: stateStorage.fontsize,
    color: 'white',
    textAlign: 'center'
  },
  button2: {
    marginTop: 20,
  },
  text2: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
    textAlign: 'center'
  },
  startExploringButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(ButtonContainer);