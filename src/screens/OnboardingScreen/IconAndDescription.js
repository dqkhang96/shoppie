import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import CustomI18n from '../../util/i18n';

// Import style
import styles from '../../theme/screens/OnboardingScreen/IconAndDescription';

// Import redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

class IconAndDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.iconAndDesContainer}>
        <View style={styles.appIconContainer} />
        {this.props.currentIndex == 0 ? <Text style={styles.text}>{CustomI18n.t('Onboard').text1}</Text>
          : this.props.currentIndex == 1 ? <Text style={styles.text}>{CustomI18n.t('Onboard').text2}</Text>
            : <Text style={styles.text}>{CustomI18n.t('Onboard').text3}</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(IconAndDescription);