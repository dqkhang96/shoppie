import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

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
        {this.props.currentIndex == 0 ? <Text style={styles.text}>Treat yourself with great and updated collections</Text>
          : this.props.currentIndex == 1 ? <Text style={styles.text}>The most fulfilling shopping experience</Text>
            : <Text style={styles.text}>Free beauty samples what they are and how to find them</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(IconAndDescription);