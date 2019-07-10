import React, { Component } from 'react';
import {
  ScrollView,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import RegisterIconsContainer from './RegisterIconsContainer';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import InputMobile from '../../components/InputMobile';
import InputName from '../../components/InputName';
import GoToLoginButton from './GoToLoginButton';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';

// Import styles
import styles from '../../theme/screens/RegisterScreen/RegisterScreen';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onSignup = async () => {

  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <BackXButton onBack={this.onBack} />
          <RegisterIconsContainer />

          <View style={styles.inputFormContainer} >
            <InputName />
            <InputEmail setUsername={()=>{}}/>
            <InputPassword setPassword={()=>{}}/>
            <InputMobile />
          </View>

          <View style={styles.buttonContainer} >
            <ColoredButton title='Sign Up' method={this.onSignup} />
          </View>
          <GoToLoginButton />
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}