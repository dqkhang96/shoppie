import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ColoredButton from '../../components/ColoredButton';
import CustomI18n from '../../util/i18n';

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

  onStart = async () => {

  }

  render() {
    return (
      this.props.currentIndex == 2
        ? <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onStart} style={styles.startExploringButton}>
            <Text style={styles.text1}>{CustomI18n.t('Onboard').startExploring}</Text>
            <Ionicons name='ios-arrow-round-forward' size={25} color='white' />
          </TouchableOpacity>
        </View>
        :
        <View style={styles.buttonContainer}>
          <ColoredButton title={CustomI18n.t('Onboard').next} method={this.onNext} />

          <TouchableOpacity onPress={this.onSkip} style={styles.button2}>
            <Text style={styles.text2}>{CustomI18n.t('Onboard').skip}</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(ButtonContainer);