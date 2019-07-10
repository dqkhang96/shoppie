import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { Header } from 'react-navigation'
import BoxSearch from '../../components/BoxSearch'
import MasterCard from '../../../res/icons/MasterCard.js'
import styles from '../../theme/screens/SearchScreen/SearchScreen'
import Colors from '../../theme/colors'
import Size from '../../theme/sizes'
export default class SearchScreen extends Component {
    static navigationOptions = {
        headerRight: <BoxSearch heightHeader={Header.HEIGHT} />
    }
    _renderItemRecommend() {
        return (
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Product') }>
                <View style={styles.renderItemRecommend}>
                <View style={styles.Information}>
                    <View style={{ padding: 5 }}>
                        <Text style={styles.text}>Get Min. 40% Off</Text>
                        <Text style={{ fontSize: 10, textAlign: 'center' }}>Grab These Easy-Going Styles</Text>
                    </View>
                    <View style={styles.Brand}>
                        <MasterCard height={40} width={40}></MasterCard>
                    </View>
                </View>

            </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: '#F6F6F6', flex: 1 }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 10, backgroundColor: Colors.ItemMenu.background, marginTop: 10 }}>
                        <View style={styles.RecentSearches}>
                            <Text style={styles.sectiontitle}>Recent Searches</Text>
                            <TouchableOpacity><Text style={{ color: '#08D6CC' }}>Edit</Text></TouchableOpacity>
                        </View>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.ItemRecentSearch}>
                                    </View>
                                    <Text style={styles.text}>DTN ABC</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 20 }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 10, backgroundColor:  Colors.ItemMenu.background, marginTop: 10 }}>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <View style={styles.ItemCategory}>
                                    <Text style={{ padding: 5,fontSize:Size.Text.normal }} >DTN ABC</Text>
                                </View>

                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 20 }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 10, backgroundColor: Colors.ItemMenu.background , marginTop: 10 }}>
                        <Text style={styles.sectiontitle}>Recommended For You</Text>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            renderItem={({ item }) => (
                                <View style={{ marginRight: 10 }}>
                                    {this._renderItemRecommend()}
                                </View>

                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 10 }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 10, backgroundColor:  Colors.ItemMenu.background, marginTop: 10 }}>
                        <Text style={styles.sectiontitle}>Hot seller Brands</Text>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            renderItem={({ item }) => (
                                <View style={{ marginRight: 10 }}>
                                    {this._renderItemRecommend()}
                                </View>

                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 10 }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}