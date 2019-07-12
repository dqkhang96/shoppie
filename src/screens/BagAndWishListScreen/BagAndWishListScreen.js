import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import BagTab from './BagTab'
import WishlistTab from './WishlistTab'
import BagAndWishListButtons from '../../components/BagAndWishListButtons.js'
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'
import Color from '../../theme/colors';
import CustomI18n from '../../util/i18n'




export default class TabViewExample extends React.Component {
    static navigationOptions = {
        title: '  Shopping Bag',
        headerLeft:<ButtonBackAndButtonMenu/>,
        headerRight:<BagAndWishListButtons/>

    };
  
    constructor(props){
      super(props)
      this.bagTab=()=><BagTab/>
      this.wishlistTab=()=><WishlistTab moveToBag={this.moveToBag}/>
      this.state = {
        index: this.props.navigation.getParam('index',0),
        routes: [
          { key: 'first', title: CustomI18n.t("BagAndWishListScreen").myBag },
          { key: 'second', title: CustomI18n.t("BagAndWishListScreen").wishlist },
        ],
      };
      this.moveToBag=this.moveToBag.bind(this)
    }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.navigation.getParam('index')!=this.state.index)
      this.setState({index:nextProps.navigation.getParam('index')})
  }

  moveToBag(){
    this.setState({index:0})
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
          first:this.bagTab,
          second:this.wishlistTab
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}


