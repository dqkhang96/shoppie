import React, { Component } from 'react'
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MenDrawerComponent from './MenDrawerComponent'
import WomenDrawerComponent from './WomenDrawerComponent.js'
import KidDrawerComponent from './KidDrawerComponent'
import AccessoriesDrawerComponent from './AccessoriesDrawerComponent.js'
import OderDrawerComponent from './OderDrawerComponent.js'
import WishlistDrawerComponent from './WishlistDrawerComponent.js'
import GiftDawerComponent from './GiftDawerComponent'
import ReferDrawerCoponent from './ReferDrawerCoponent.js'
import SettingDrawerComponent from './SettingDrawerComponent'
import LogoutDrawerComponent from './LogoutDrawerComponent'
import Color from '../../theme/colors';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../theme/SildeMenu/CustomDrawerContentComponent'
// Import api
import { logoutAPI, loginNormalAPI } from '../../service/apis';

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// Import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class CustomDrawerContentComponent extends Component {

  // First of all, check if user had already logged in on this app?
  async componentWillMount() {
    const isLoginGG = await AsyncStorage.getItem('isLoginGG');
    const isLoginFB = await AsyncStorage.getItem('isLoginFB');
    const isLoginNormal = await AsyncStorage.getItem('isLoginNormal');
    const username = await AsyncStorage.getItem('username');
    const password = await AsyncStorage.getItem('password');

    if (isLoginGG == 'true') {
      this.onGGLogin();
      this.props.navigation.goBack();
    }
    else if (isLoginFB == 'true') {
      this.onFBLogin();
      this.props.navigation.goBack();
    }
    else if (isLoginNormal == 'true') {
      this.onNormalLogin(username, password);
      this.props.navigation.goBack();
    }
    else {
      // Do nothing
    }
  }

  onGGLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Call the Login Google action of Redux
      await this.props.logInGG(userInfo.user);
    } catch (err) {
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        await AsyncStorage.setItem('isLoginGG', 'false');
      }
      else {
        alert(`GG Login Silently failed with error: ${err}`);
      }
    }
  }

  onFBLogin = async () => {
    try {
      let resultLogin = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (resultLogin.isCancelled) {
        alert(`Login was cancelled!`);
        await AsyncStorage.setItem('isLoginFB', 'false');
      } else {
        let resultToken = await AccessToken.getCurrentAccessToken();
        let res = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${resultToken.accessToken}`)
        let resultUserInfoJSON = await res.json();
        // Call the Login Facebook action of Redux
        await this.props.logInFB(resultUserInfoJSON, resultToken.accessToken);
      }
    } catch (err) {
      alert(`FB Login silently failed with: ${err}`);
    }
  }

  onNormalLogin = async (username, password) => {
    try {
      const token = await loginNormalAPI(username, password);

      // Save this for the next Login Normal
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('isLoginNormal', 'true');

      // Save to redux
      const userInfo = {
        name: username,
        username: username,
        email: username,
        accessToken: token,
      }
      this.props.logInNormal(userInfo);
    } catch (err) {
      alert(`Normal Login silently failed with: ${err}`);
    }
  }

  onLogOut = async () => {
    const isLogoutable = await logoutAPI();
    if (isLogoutable) {
      this.props.logOut(this.props.user.accessToken);
    }
    else {
      // Do nothing
    }
  }

  renderInfo() {
    return (
      this.props.user.isLogin == false
        ? <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.loginButton} >
          <Text style={{ fontSize: 25, color: 'black' }}>Login</Text>
        </TouchableOpacity>
        : <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
          {this.props.user.avatar !== ''
            ? <Image style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15 }}
              source={{ uri: this.props.user.avatar }}
            />
            : <View style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15, backgroundColor: Color.primary }} />}
          <View
            style={styles.pencil}>
            <EvilIcons name='pencil'
              size={15}
            />
          </View>
          <View style={styles.name} >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{this.props.user.name}</Text>
            <Text>{this.props.user.email}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  renderLogOutButton() {
    return (
      this.props.user.isLogin == false
        ? <View style={{ paddingHorizontal: 10, marginBottom: 10 }} />
        : <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={this.onLogOut}>
            <LogoutDrawerComponent />
          </TouchableOpacity>
        </View>)
  }

  render() {
    return (
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: '20', horizontal: 'never' }}>
            {this.renderInfo()}

            <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'column' }}>
              <View>
                <View style={{ paddingHorizontal: 10 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}  >
                    <MenDrawerComponent />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')} >
                    <WomenDrawerComponent></WomenDrawerComponent>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                    <KidDrawerComponent></KidDrawerComponent>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                    <AccessoriesDrawerComponent></AccessoriesDrawerComponent>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
                <View style={{ paddingHorizontal: 10 }}>
                  <TouchableOpacity><OderDrawerComponent></OderDrawerComponent></TouchableOpacity>
                  <TouchableOpacity><WishlistDrawerComponent></WishlistDrawerComponent></TouchableOpacity>
                  <TouchableOpacity><GiftDawerComponent></GiftDawerComponent></TouchableOpacity>
                  <TouchableOpacity><ReferDrawerCoponent></ReferDrawerCoponent></TouchableOpacity>
                  <TouchableOpacity><SettingDrawerComponent></SettingDrawerComponent></TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
              </View>
            </View>

          </SafeAreaView>
        </ScrollView>

        {this.renderLogOutButton()}
      </View>
    )
  }
}



const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(CustomDrawerContentComponent))
