import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import styles from '../theme/components/BagAndWishListButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';

const BUTTON_SIZE = Header.HEIGHT * 0.5
const BagAndWishListButtons = ({ navigation, cart }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.navigate("BagAndWishList", { index: 1 })}
    >
      <View style={styles.viewButton}>
        <Ionicons name="md-heart-empty" color='black' size={BUTTON_SIZE} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("BagAndWishList", { index: 0 })}
    >
      <View style={styles.viewButton}>
        <SimpleLineIcons name="bag" color='black' size={BUTTON_SIZE - Header.HEIGHT * 0.1} />
        {cart.length != 0 ? <View style={styles.notiBox}><Text style={styles.notiBoxText}>{cart.length}</Text></View> : null}
      </View>
    </TouchableOpacity>
  </View>
)

const mapStateToProp = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProp)(withNavigation(BagAndWishListButtons))