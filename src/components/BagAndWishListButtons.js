import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import styles from '../theme/components/BagAndWishListButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from '../../res/icons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';

const BUTTON_SIZE = Header.HEIGHT * 0.5
class BagAndWishListButtons extends React.Component {

  constructor(props) {
    super(props)
    this.onLayoutCartButton = this.onLayoutCartButton.bind(this)
    this.onLayoutLikeButton = this.onLayoutLikeButton.bind(this)
  }

  onLayoutLikeButton({ nativeEvent }) {
    if (this.likeButton) {
      this.likeButton.measure((x, y, width, height, pageX, pageY) => {
        this.props.navigation.setParams({
          positionLikeButton: {
            pageX, pageY
          }
        })
      })
    }
  }

  onLayoutCartButton({ nativeEvent }) {
    if (this.cartButton) {
      this.cartButton.measure((x, y, width, height, pageX, pageY) => {
        this.props.navigation.setParams({
          positionCartButton: {
            pageX, pageY
          }
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BagAndWishList", { index: 1 })}
        >
          <View style={styles.viewButton} ref={viewButton => this.likeButton = viewButton}
            onLayout={this.onLayoutLikeButton}
          >
            <Icons.Hea name="md-heart-empty" color='black' size={BUTTON_SIZE} />
            <View style={styles.notiBox}>
              <Text style={styles.notiBoxText}>1</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BagAndWishList", { index: 0 })}
        >
          <View style={styles.viewButton} ref={viewButton => this.cartButton = viewButton}
            onLayout={this.onLayoutCartButton}>
            <SimpleLineIcons name="bag" color='black' size={BUTTON_SIZE - Header.HEIGHT * 0.1} />
            <View style={styles.notiBox}>
              <Text style={styles.notiBoxText}>1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


const mapStateToProp = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProp)(withNavigation(BagAndWishListButtons))