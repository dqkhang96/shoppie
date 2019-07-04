import React from 'react'
import Swiper from '../components/Swiper'
import CircleView from '../components/CircleView'
import Card, { CardBody, CardView } from '../components/Card'
import { ScrollView, FlatList, View, StyleSheet, Text, } from 'react-native';
import { wp, WIDTH_SCREEN } from '../untils'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonMenu from '../components/ButtonMenu'
import BagAndWishListButtons from '../components/BagAndWishListButtons.js'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Shoppiee',
        headerLeft:<ButtonMenu/>,
        headerRight:<BagAndWishListButtons/>
    };

    render() {
        return (
            <View contentContainerStyle={styles.container}>
                <ScrollView >
                    <View style={{ paddingHorizontal: wp(1) }}>
                        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item }) => (
                                <CircleView style={{ marginRight: wp(5) }} label="KHANG">
                                    <View style={{ height: wp(6), width: wp(6) }} />
                                </CircleView>
                            )}
                            keyExtractor={(item, index) => "circle-view-" + item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.listCircleView}
                        />
                    </View>
                    <View style={{ height: wp(40) }}>
                        <Swiper autoplay autoplayTimeout={5} showsPagination={false}>
                            <View style={{ width: WIDTH_SCREEN, height: wp(40), backgroundColor: 'red' }} />
                            <View style={{ width: WIDTH_SCREEN, height: wp(40), backgroundColor: 'blue' }} />
                            <View style={{ width: WIDTH_SCREEN, height: wp(40), backgroundColor: 'green' }} />
                        </Swiper>
                    </View>
                    <View style={styles.newArrival}>
                        <Text style={styles.textNewArrival}>NEW ARRIVAL</Text>
                        <FlatList horizontal
                            keyExtractor={(item, index) => "arrival-" + index}
                            showsHorizontalScrollIndicator={false}
                            data={[1, 2, 3]}
                            renderItem={({ item ,index }) => (
                                <Card style={[styles.cardArrival,{marginLeft:index>0?wp(2.5):0}]}>
                                    <CardView footer={(<View style={{ height: wp(6), width: wp(30), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                        <View style={{ height: wp(45), width: wp(41), backgroundColor: '#EEEEEE' }} />
                                    </CardView>
                                </Card>
                            )}
                            style={{ padding: 0 }}
                        />
                    </View>
                    <View style={styles.hotBrands}>
                        <Text style={styles.textHotBrand}>HOT SELLER BRANDS</Text>
                        <FlatList data={[1, 2, 3, 4, 5, 6]}
                            numColumns={3}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => "brand-" + index}
                            renderItem={({ item ,index}) => (
                                <Card style={[styles.hotBrandCard,{marginLeft:index%3!=0?wp(3.5):0}]}>
                                    <CardView footer={(<View style={{ height: wp(5), width: wp(20), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                        <View style={{ height: wp(28), width: wp(28), backgroundColor: '#EEEEEE' }} />
                                    </CardView>
                                    <CardBody><View style={{ width: wp(30) }}><Text style={{ textAlign: 'center' }}>Shit</Text></View></CardBody>
                                </Card>
                            )}
                        />
                    </View>
                    <View style={styles.trendings}>
                        <Text style={styles.trendingText}>TRENDING</Text>
                        <FlatList data={[1, 2, 3]} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => "trending-" + index}
                        renderItem={({ item ,index}) => (
                            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.navigate("Product")
                                    
                                }}
                            >
                            <Card style={[styles.trendingCard,{marginLeft:index>0?wp(3):0}]}>
                                <CardView footer={(<View style={{ height: wp(5), width: wp(50), backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}>MEN</Text></View>)}>
                                    <View style={{ height: wp(60), width: wp(60), backgroundColor: '#EEEEEE' }} />
                                </CardView>
                                <CardBody>
                                    <View style={{ width: wp(60) }}>
                                        <Text style={{ textAlign: 'center' }}>Shit</Text>
                                    </View>
                                </CardBody>
                            </Card>
                            </TouchableOpacity>
                        )}
                        />
                    </View>
                    <View style={styles.newSessionStyle}>
                        <Text style={styles.newSessionStyleText}>NEW SESSION STYLE</Text>
                        <View style={styles.nSSContainer}>
                            <View style={styles.nSSContent}>

                            </View>

                        </View>

                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    listCircleView: {
        padding: wp(3.5),
    },
    newArrival: {
        padding: wp(3.5)
    },
    cardArrival: {
        width: wp(45),
        padding: wp(2),
        alignItems:'center',
        justifyContent:'center'
    },
    textNewArrival: {
        marginBottom: wp(1)
    },
    hotBrands: {
        padding: wp(3.5)
    },
    textHotBrand: {
        textAlign: 'center',
        marginBottom: wp(2),
        fontSize: wp(5)
    },
    hotBrandCard: {
        width: wp(28),
        marginBottom: wp(2)
    },
    trendings: {
        padding:wp(3.5)
    },
    trendingCard: {
        width:wp(60)
    },
    trendingText: {
        fontSize: wp(5),
        marginBottom: wp(2)
    },
    newSessionStyle:{
        padding:wp(3.5),
    },
    newSessionStyleText:{
        fontSize:wp(5)
    },
    nSSContainer:{
        padding:wp(2),
        borderWidth:1,
        borderColor:"#EEEEEE"
    },
    nSSContent:{
        backgroundColor:'#EEEEEE',
        height:wp(60),
        width:wp(88)
    }
})