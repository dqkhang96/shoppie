import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import BagTab from './BagTab'
import WishlistTab from './WishlistTab'
import BagAndWishListButtons from '../../components/BagAndWishListButtons.js'
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'
import Color from '../../theme/colors';
import CustomI18n from '../../util/i18n'
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
  
    constructor(props){
      super(props)
      this.state = {
        index: this.props.navigation.getParam('index',0),
        routes: [
          { key: 'first', title: CustomI18n.t("BagAndWishListScreen").myBag },
          { key: 'second', title: CustomI18n.t("BagAndWishListScreen").wishlist },
        ],
      };
    }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.navigation.getParam('index')!=this.state.index)
      this.setState({index:nextProps.navigation.getParam('index')})
  }

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


