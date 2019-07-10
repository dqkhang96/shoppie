import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import styles from '../theme/components/BagAndWishListButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const BUTTON_SIZE = Header.HEIGHT * 0.5
const BagAndWishListButtons = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
    >
      <View style={styles.viewButton}>
        <Ionicons name="md-heart-empty" color='black' size={BUTTON_SIZE} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("BagAndWishList")}
    >
      <View style={styles.viewButton}>
        <SimpleLineIcons name="bag" color='black' size={BUTTON_SIZE-Header.HEIGHT*0.1} />
        <View style={styles.notiBox}>
          <Text style={styles.notiBoxText}>1</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
)



export default withNavigation(BagAndWishListButtons)