import React from 'react'
import Swiper from '../../components/Swiper'
import CircleView from '../../components/CircleView'
import Card, { CardBody, CardView } from '../../components/Card'
import { ScrollView, FlatList, View, StyleSheet, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonMenu from '../../components/ButtonMenu'
import BagAndWishListButtons from '../../components/BagAndWishListButtons.js'
import styles from '../../theme/screens/HomeScreen/HomeScreen'
import { Size, sp, SCREEN_WIDTH } from '../../theme/sizes'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Shoppiee',
        headerLeft: <ButtonMenu />,
        headerRight: <BagAndWishListButtons />
    };

    _renderNewArrival() {
        return (
            <View style={styles.newArrival}>
                <Text style={styles.textNewArrival}>NEW ARRIVAL</Text>
                <FlatList horizontal
                    keyExtractor={(item, index) => "arrival-" + index}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3]}
                    renderItem={({ item, index }) => (
                        <Card style={[styles.cardArrival, { marginLeft: index > 0 ? sp(2.5) : 0 }]}>
                            <CardView footer={(<View style={{ height: sp(6), width: sp(30), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                <View style={{ height: sp(45), width: sp(41), backgroundColor: '#EEEEEE' }} />
                            </CardView>
                        </Card>
                    )}
                    style={{ padding: 0 }}
                />
            </View>)
    }

    _renderHotBrands() {
        const MARGIN_LEFT = (SCREEN_WIDTH - 2 * Size.Section.padding - 3 * sp(28)) / 2
        return (
            <View style={styles.hotBrands}>
                <Text style={styles.textHotBrand}>HOT SELLER BRANDS</Text>
                <FlatList data={[1, 2, 3, 4, 5, 6]}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => "brand-" + index}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("Brands")}
                        >
                            <Card style={[styles.hotBrandCard, { marginLeft: index % 3 != 0 ? MARGIN_LEFT : 0 }]}>
                                <CardView footer={(<View style={{ height: sp(5), width: sp(20), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                    <View style={{ height: sp(28), width: sp(28), backgroundColor: '#EEEEEE' }} />
                                </CardView>
                                <CardBody><View style={{ width: sp(28) }}><Text style={{ textAlign: 'center', fontSize: Size.Text.normal }}>Shit</Text></View></CardBody>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    _renderTrend() {
        return (
            <View style={styles.trendings}>
                <Text style={styles.trendingText}>TRENDING</Text>
                <FlatList data={[1, 2, 3]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => "trending-" + index}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Product")

                            }}
                        >
                            <Card style={[styles.trendingCard, { marginLeft: index > 0 ? sp(3) : 0 }]}>
                                <CardView footer={(<View style={{ height: sp(5), width: sp(50), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                    <View style={{ height: sp(60), width: sp(60), backgroundColor: '#EEEEEE' }} />
                                </CardView>
                                <CardBody>
                                    <View style={{ width: sp(60) }}>
                                        <Text style={{ textAlign: 'center' }}>Shit</Text>
                                    </View>
                                </CardBody>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
    _renderNewStyle() {
        return (
            <View style={styles.newSessionStyle}>
                <Text style={styles.newSessionStyleText}>NEW SESSION STYLE</Text>
                <View style={styles.nSSContainer}>
                    <View style={styles.nSSContent}>

                    </View>

                </View>

            </View>
        )
    }
    render() {

        return (
            <View contentContainerStyle={styles.container}>
                <ScrollView >
                    <View style={{ paddingHorizontal: sp(1) }}>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <CircleView style={{ marginRight: sp(5) }} label="KHANG">
                                    <View style={{ height: sp(6), width: sp(6) }} />
                                </CircleView>
                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.listCircleView}
                        />
                    </View>
                    <View style={{ height: sp(40) }}>
                        <Swiper autoplay autoplayTimeout={5} showsPagination={false}>
                            <View style={{ width: SCREEN_WIDTH, height: sp(40), backgroundColor: 'red' }} />
                            <View style={{ width: SCREEN_WIDTH, height: sp(40), backgroundColor: 'blue' }} />
                            <View style={{ width: SCREEN_WIDTH, height: sp(40), backgroundColor: 'green' }} />
                        </Swiper>
                    </View>
                    {this._renderNewArrival()}
                    {this._renderHotBrands()}
                    {this._renderTrend()}
                    {this._renderNewStyle()}

                </ScrollView>
            </View>
        )
    }
}

