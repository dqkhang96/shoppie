import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import stateStorage from '../../config/stateStorage';

//import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

const onboardImagesList = [
  'https://images-na.ssl-images-amazon.com/images/I/61A5lkj1eXL._SX425_.jpg',
  'https://cdn11.bigcommerce.com/s-2d3oadz3/images/stencil/1280x1280/products/148/877/HKZ42003Y_Ball__84178.1539806952.jpg?c=2&imbypass=on',
  'https://cdn.shopify.com/s/files/1/0021/4188/0385/products/FBCJ-Clsc_Exercise_Ball_Chair_55__31998_2000x.jpg?v=1534786273',
]

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
  }

  onRenderDot = () => (
    onboardImagesList.map((image, i) => (
      <TouchableOpacity
        style={i == this.props.currentIndex ? styles.activeDot : styles.inactiveDot}
        key={i}
        onPress={() => { global.carouselRef.snapToItem(i); }}
      />
    ))
  )

  get pagination() {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={this.props.currentIndex}
        renderDots={this.onRenderDot}
      />
    );
  }

  render() {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={(ref) => {
            global.carouselRef = ref;
          }}
          sliderWidth={stateStorage.SCREEN_WIDTH}
          itemWidth={stateStorage.SCREEN_WIDTH * 0.65}
          data={onboardImagesList}
          renderItem={({ item }) => { return <Image source={{ uri: item }} style={styles.image} /> }}

          onSnapToItem={i => {
            i == 1 ? this.props.to1step()
              : i == 2 ? this.props.to2step()
                : this.props.tobackstep()
          }}
        />

        {this.pagination}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.5,
  },
  image: {
    width: stateStorage.SCREEN_WIDTH * 0.65,
    height: stateStorage.SCREEN_WIDTH * 0.65,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(CustomCarousel);