import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColoredButton from '../../components/ColoredButton';

// Import styles
import styles from '../../theme/screens/OnboardingScreen/ButtonContainer';

// Import redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';


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

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(ButtonContainer);