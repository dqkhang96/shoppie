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

const CustomDrawerContentComponent = (props) => (
  <View style={{ justifyContent: 'space-between', flex: 1 }}>
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: '20', horizontal: 'never' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')} >
          <Image style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15 }}
            source={require('../../image/radio.png')}
          />
          <View
            style={styles.pencil}>
            <EvilIcons name='pencil'
              size={15}
            />
          </View>
          <View style={styles.name} >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Thắng Nguyễn</Text>
            <Text>canhbuomphieudu98@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'column' }}>
          <View>
            <View style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Category')}  >
                <MenDrawerComponent />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Category')} >
                <WomenDrawerComponent></WomenDrawerComponent>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Category')}>
                <KidDrawerComponent></KidDrawerComponent>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Category')}>
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
    <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
      <TouchableOpacity><LogoutDrawerComponent></LogoutDrawerComponent></TouchableOpacity>
    </View>
  </View>
);

export default withNavigation(CustomDrawerContentComponent)
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
