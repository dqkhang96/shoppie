import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import BackXButton from '../../components/BackXButton';
import ListItems from './ListItems';
import ColoredButton from '../../components/ColoredButton';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/NotificationScreen/NotificationScreen';

// Import redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';


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
          <Text style={styles.title}>{CustomI18n.t('Notification').header}</Text>
          <ListItems />
        </View>
        <View style={styles.buttonContainer}>
          <ColoredButton title={CustomI18n.t('Notification').continueButton} method={this.onContinue} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(NotificationScreen);