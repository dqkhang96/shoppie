import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import ArrowRight from '../../../res/icons/ArrowRight'
import styles from '../../theme/SildeMenu/MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {this.props.icon}
          <Text style={styles.label}>{this.props.label}</Text>
        </View>
        <View>{this.props.hiddenArrow ? null : <ArrowRight height={styles.icon.height} width={styles.icon.width} fill={'#B8B8B8'}></ArrowRight>}</View>
      </View>
    );
  }
}