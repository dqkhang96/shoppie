import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation, createStackNavigator } from 'react-navigation';
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

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// Import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class CustomDrawerContentComponent extends Component {
  async componentWillMount() {
    const isGGSignedIn = await GoogleSignin.isSignedIn();
    const isFBSignedIn = await AccessToken.getCurrentAccessToken();;

    if (isGGSignedIn) {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await this.props.logInGG(userInfo.user);
    }
  }

  onLogOut = async () => {
    const isGGSignedIn = await GoogleSignin.isSignedIn();
    if (isGGSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.logOut();
    }
    else {
      let signOutRequest =
        new GraphRequest(
          "me/permissions/",
          {
            accessToken: this.props.user.accessToken,
            httpMethod: 'DELETE'
          },
          (error, result) => {
            if (error) {
              console.log('Error fetching data: ' + error.toString());
            } else {
              LoginManager.logOut();
            }
          });
      await new GraphRequestManager().addRequest(signOutRequest).start();
      alert(this.props.user.accessToken)
      this.props.logOut();
    }
  }

  renderInfo() {
    return (
      this.props.user.isLogin == false
        ? <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.loginButton} >
          <Text style={{ fontSize: 25, color: 'black' }}>Login</Text>
        </TouchableOpacity>
        : <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
          <Image style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15 }}
            source={{ uri: this.props.user.avatar }}
          />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pencil: {
    position: 'absolute',
    top: -2,
    left: 55,
    width: 15,
    height: 15,
    backgroundColor: '#32D4D9',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    position: 'absolute',
    top: 2,
    left: 80,
    width: 350,
    height: 30,
    backgroundColor: '#FFFFFF'
  }
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(CustomDrawerContentComponent))
