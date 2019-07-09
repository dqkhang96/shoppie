import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

import Card, { CardView, CardBody } from '../../components/Card';
import ButtonGradient from '../../components/ButtonGradient';
import Banner from '../../components/Banner'
import AdvertisingPanel from '../../components/AdvertisingPanel'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {Size,sp} from '../../theme/sizes'
import styles from '../../theme/screens/CategoryScreen/CategoryScreen'

export default class CategoryScreen extends React.Component {
    static navigationOptions = {
        title: "Category"
    }
    constructor(props) {
        super(props)
    }

    _renderCategories() {
        return (
            <View style={styles.categoriesContainer}>
                <Text style={styles.title}>Categories</Text>
                <FlatList
                    data={["topwear", "bottomwear", "sportswear", "Festive wear", "Inner wear", "footwear", "watches", "sunglasses", "backpacks", "personal care", "accessories", "luggage"]}
                    keyExtractor={(item, index) => "category-" + index}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <TouchableNativeFeedback
                            onPress={() => this.props.navigation.navigate("Topwear")}
                        >
                            <View style={styles.categoryContent}>
                                <View style={styles.categoryImage} />
                                <Text style={styles.categoryLabel}>{item}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        )
    }

    _renderWardrobe() {
        return (
            <View style={styles.wardrobeContainer}>
                <Text style={styles.title}>Monthly Wardrobe</Text>
                <View style={styles.wardrobeContent}>
                    <FlatList
                        data={[1, 2, 3]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => "wardrobe-" + index}
                        renderItem={({ item, index }) => (
                            <View style={styles.wardrobeItem}>
                                <Card>
                                    <CardView
                                        style={{marginBottom:sp(2)}}
                                        footer={(
                                            <ButtonGradient fromColor="red" toColor="blue" title="Get Minimium 40% Off" style={{ bottom: -sp(3),height:sp(8),width:sp(55),fontSize:Size.Button.textSize  }} />
                                        )}
                                    >
                                        <View style={styles.wardrobeView} />
                                    </CardView>
                                    <CardBody>
                                        <Text style={styles.wardrobeLabel}>Cool Styles to Kicj Back In!</Text>
                                    </CardBody>
                                </Card>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }

    _renderHotBrand() {
        return (
            <View style={styles.hotBrandContainer}>
                <View style={styles.hotBrandContent}>
                    <Text style={styles.titleHotBrand}>Hot seller Brands</Text>
                    <View style={styles.listHotBrand}>
                        <FlatList
                            numColumns={3}
                            keyExtractor={(item, index) => "hot-brand-" + index}
                            data={["Cropped Jeans", "Boots", "Watches", "Bomber Jackets", "Trousers", "Mufflers"]}
                            renderItem={({ item, index }) => (
                                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("Bands")}>
                                    <View style={styles.hotBrandItem}>
                                        <Card>
                                            <CardView>
                                                <View style={styles.hotBrandView} />
                                            </CardView>
                                            <CardBody>
                                                <Text style={styles.hotBrandName}>{item}</Text>
                                            </CardBody>
                                        </Card>
                                    </View>
                                </TouchableNativeFeedback>
                            )}
                        />
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Banner />
                    <AdvertisingPanel />
                    {this._renderCategories()}
                    {this._renderWardrobe()}
                    {this._renderHotBrand()}
                </ScrollView>


            </View>
        )
    }
}

