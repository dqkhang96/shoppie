import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ImageRes from '../../util/images';
import { SCREEN_WIDTH } from '../../theme/sizes';

// Import styles
import styles from '../../theme/screens/OnboardingScreen/CustomCarousel';

// Import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

const onboardImagesList = [
  ImageRes.onboarding1, ImageRes.onboarding2, ImageRes.onboarding3,
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
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH * 0.65}
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

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(CustomCarousel);