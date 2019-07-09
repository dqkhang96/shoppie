import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import BagTab from './BagTab'
import WishlistTab from './WishlistTab'
import BagAndWishListButtons from '../../components/BagAndWishListButtons.js'
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'
import Color from '../../theme/colors';
const FirstRoute = () => (
  <View style={{flex:1}}>
      <BagTab></BagTab>
  </View>
);

const SecondRoute = () => (
  <View style={{flex:1}}>
      <WishlistTab></WishlistTab>
  </View>
);

export default class TabViewExample extends React.Component {
    static navigationOptions = {
        title: '  Shopping Bag',
        headerLeft:<ButtonBackAndButtonMenu/>,
        headerRight:<BagAndWishListButtons/>

    };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'My Bag' },
      { key: 'second', title: 'Wishlist' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Color.primary }}
            activeColor={Color.primary}
            inactiveColor="black"
            style={{ backgroundColor: 'white'}}
          />
        }
        style={{ backgroundColor: 'white' }}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}


