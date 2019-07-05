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
import BoxSearch from '../components/BoxSearch'
import MasterCard from '../icons/MasterCard.js'

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
                        <Text style={{ textAlign: 'center' }}>Get Min. 40% Off</Text>
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
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                        <View style={styles.RecentSearches}>
                            <Text style={{ fontWeight: 'bold' }}>Recent Searches</Text>
                            <TouchableOpacity><Text style={{ color: '#08D6CC' }}>Edit</Text></TouchableOpacity>
                        </View>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.ItemRecentSearch}>
                                    </View>
                                    <Text style={{ textAlign: 'center', marginTop: 5 }}>DTN ABC</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 20 }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <View style={styles.ItemCategory}>
                                    <Text style={{ padding: 5 }} >DTN ABC</Text>
                                </View>

                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ padding: 20 }}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', }}>Recommended For You</Text>
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
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#FFFFFF', marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', }}>Hot seller Brands</Text>
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
const styles = StyleSheet.create({
    RecentSearches: {
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    ItemRecentSearch: {
        marginRight: 10,
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#eaeaea'
    },
    ItemCategory: {
        marginRight: 10,
        height: 28,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#eaeaea',
        justifyContent: 'center'
    },
    renderItemRecommend:{
        height: 150, 
        width: 140, 
        borderWidth: 1,         
        borderColor: '#eaeaea', 
        backgroundColor: '#F6F6F6', 
        justifyContent: 'flex-end',
    },
    Brand:{
        height: 35, width: 90, backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: -25,
        left:25,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    Information:{
        height: 50,
        width: 138,
        backgroundColor: '#FFFFFF',
        alignContent:'center',
    }
})