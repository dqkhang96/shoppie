import React from 'react'
import { View, StyleSheet, ScrollView, TouchableNativeFeedback, Text, FlatList, Modal } from 'react-native'
import Banner from '../components/Banner'
import Icons from '../icons'
import { sp, wp, hp } from '../untils'
import Card, { CardBody, CardView } from '../components/Card'
import ButtonMenu from '../components/ButtonMenu'


export default class TopwearScreen extends React.Component {

    static navigationOptions = {
        headerLeft: <ButtonMenu />,
        title: "Topwear"
    }

    constructor(props) {
        super(props)
        this.sortBy = ["Popularity", "New", "Discount", "Delivery Time", "Price: High - Low", "Price: High - Low"]
        this.filters = [
            {
                tag: "Categories",
                children: ["Cargos & Trousers", "Ethnic Wear", "Innerwear & Sleepwear", "Jackets", "Jeans", "T-Shirts", "Shorts", "Sportswear", "Swimwear", "Winterwear", "Handkerchieves"]
            },
            {
                tag: 'Brands',
                children: ["Red Tape", "FILA", "Adidas", "Aldo", "Black Berys", "Biba", "Forever 21", "Viet tien", "Ship rack"]
            },
            {
                tag: "Size",
                children: ["XL", "S", "L", "XXL"]
            },
            {
                tag: "Color",
                children: ["red", "blue", "green"]
            },
            // {
            //     tag: "Price",
            // },
            // {
            //     tag: "Occasion"
            // }
        ]
        this.state = {
            showModalSort: false,
            showModalFilter: false,
            indexSortBySelected: -1,
            filterCategories: [],
            filterBrands: [],
            filterSize: [],
            filterColor: [],
            filterPrice: {},
            indexTagFilterSelected: 0
        }
    }

    _renderSortAndFilter() {
        return (
            <View style={styles.sortAndFilter}>
                <TouchableNativeFeedback
                    onPress={() => this.setState({ showModalSort: true })}
                >
                    <View style={styles.item}>
                        <Icons.Circle height={sp(1.5)} width={sp(1.5)} fill={this.hasSortBy() ? "#00D3E1" : "gray"} />
                        <View style={styles.mr_2} />
                        <Icons.Sort height={sp(5)} width={sp(5)} />
                        <Text style={styles.itemText}>SORT</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => this.setState({ showModalFilter: true })}
                >
                    <View style={styles.item}>
                        <Icons.Circle height={sp(1.5)} width={sp(1.5)} fill={this.hasFilter() ? "#00D3E1" : "gray"} />
                        <View style={styles.mr_2} />
                        <Icons.Filter height={sp(5)} width={sp(5)} />
                        <Text style={styles.itemText}>Filter</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    _renderListProduct() {
        return (
            <View style={styles.listProductContainer}>
                <FlatList
                    numColumns={2}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    keyExtractor={(item, index) => "product-" + index}
                    renderItem={({ item, key }) => (
                        <TouchableNativeFeedback
                            onPress={()=>this.props.navigation.navigate("Product")}
                        >
                            <View style={styles.product}>
                                <Card>
                                    <CardView>
                                        <View style={styles.productView} />
                                    </CardView>
                                    <CardBody>
                                        <View style={styles.productBody}>
                                            <Text style={styles.productBrand}>{"Monteil & Munero"}</Text>
                                            <View style={styles.productPrice}>
                                                <Text style={styles.price}>Rs. 2,100</Text>
                                                <Text style={styles.priceRoot}>Rs. 5,999</Text>
                                                <Text style={styles.saleOff}>65% off</Text>
                                            </View>
                                            <Text style={styles.productName}>Men Solid Bomber Jacket</Text>
                                        </View>
                                    </CardBody>
                                </Card>
                            </View>
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        )
    }

    _renderModalSort() {
        return (
            <Modal visible={this.state.showModalSort} transparent animationType="fade">
                <View style={styles.wrapModal}>
                    <View style={styles.modalSort}>
                        <TouchableNativeFeedback
                            onPress={() => this.setState({ showModalSort: false, indexSortBySelected: -1 })}
                        >
                            <Text style={styles.titleModalSort}>SORT BY</Text>
                        </TouchableNativeFeedback>
                        <View style={styles.devide} />
                        <View style={styles.bodyModalSort}>
                            <FlatList data={this.sortBy}
                                keyExtractor={(item, index) => "sort-by-" + index}
                                renderItem={({ item, index }) => (
                                    <TouchableNativeFeedback
                                        onPress={() => this.setState({ indexSortBySelected: index, showModalSort: false })}
                                    >
                                        <View style={styles.buttonSortBy}>
                                            <Text style={[styles.sortByText, { color: (this.state.indexSortBySelected != index) ? "black" : "#03C5D9" }]}>{item}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                )} />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    toggleFilters(filter) {
        const { filterCategories, filterBrands, filterSize, filterColor, indexTagFilterSelected } = this.state
        switch (indexTagFilterSelected) {
            case 0:
                if (filterCategories.find((item => item == filter)) == undefined)
                    this.setState({ filterCategories: [...filterCategories, filter] })
                else this.setState({ filterCategories: filterCategories.filter(item => item != filter) })
                break;
            case 1:
                if (filterBrands.find((item => item == filter)) == undefined)
                    this.setState({ filterBrands: [...filterBrands, filter] })
                else this.setState({ filterBrands: filterBrands.filter(item => item != filter) })
                break;
            case 2:
                if (filterSize.find((item => item == filter)) == undefined)
                    this.setState({ filterSize: [...filterSize, filter] })
                else this.setState({ filterSize: filterSize.filter(item => item != filter) })
                break;
            case 3:
                if (filterColor.find((item => item == filter)) == undefined)
                    this.setState({ filterColor: [...filterColor, filter] })
                else this.setState({ filterColor: filterColor.filter(item => item != filter) })
                break;
        }

    }

    hasSortBy() {
        return this.state.indexSortBySelected > -1
    }

    hasFilter() {
        const { filterCategories, filterBrands, filterSize, filterColor } = this.state
        return (filterCategories.length > 0) || (filterBrands.length > 0) || (filterSize.length > 0) || (filterColor.length > 0)
    }

    isFilter(filter) {
        const { filterCategories, filterBrands, filterSize, filterColor, indexTagFilterSelected } = this.state
        switch (indexTagFilterSelected) {
            case 0:
                return filterCategories.find(item => item == filter) != undefined
            case 1:
                return filterBrands.find(item => item == filter) != undefined
            case 2:
                return filterSize.find(item => item == filter) != undefined
            case 3:
                return filterColor.find(item => item == filter) != undefined
        }

    }

    _renderModalFilter() {
        const filters = this.filters[this.state.indexTagFilterSelected].children
        return (
            <Modal visible={this.state.showModalFilter} transparent animationType="fade">
                <View style={styles.wrapModal}>
                    <View style={styles.modalFitler}>
                        <View style={styles.headerModalFilter}>
                            <TouchableNativeFeedback onPress={() => this.setState({ showModalFilter: false })}>
                                <View style={styles.buttonCancelModalFilter}>
                                    <Icons.Cancel height={sp(4)} width={sp(4)} fill="gray" />
                                </View>
                            </TouchableNativeFeedback>
                            <Text style={styles.titleModalFilter}>Filter By</Text>
                        </View>
                        <View style={styles.devide} />
                        <View style={styles.bodyModalFilter}>
                            <View style={styles.listTag}>
                                <FlatList data={this.filters}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => "filter-tag-" + index}
                                    renderItem={({ item, index }) => (
                                        <TouchableNativeFeedback
                                            onPress={() => this.setState({ indexTagFilterSelected: index })}
                                        >
                                            <View style={styles.tagView}>
                                                <View style={[styles.buttonTag, { backgroundColor: this.state.indexTagFilterSelected == index ? "white" : "#f2f2f2" }]}>
                                                    <Text style={[styles.textTag, { color: this.state.indexTagFilterSelected == index ? "#00D3E1" : "black" }]} >{item.tag}</Text>
                                                </View>
                                                {index < this.filters.length ? <View style={styles.devide} /> : null}
                                            </View>
                                        </TouchableNativeFeedback>
                                    )}
                                />
                            </View>
                            <View style={styles.listFilter}>
                                {filters.map((item, index) => (
                                    <TouchableNativeFeedback
                                        key={index}
                                        onPress={() => this.toggleFilters(index)}
                                    >
                                        <View style={styles.filterView}>
                                            <View style={styles.filterButton}>
                                                <Text style={[styles.filterText, { color: this.isFilter(index) ? "#00D3E1" : "black" }]}>{item}</Text>
                                            </View>
                                            {index < filters.length ? <View style={styles.devide} /> : null}
                                        </View>
                                    </TouchableNativeFeedback>
                                ))}
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Banner />
                    {this._renderSortAndFilter()}
                    {this._renderListProduct()}
                </ScrollView>
                {this._renderModalSort()}
                {this._renderModalFilter()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mr_2: {
        marginRight: sp(2)
    },
    sortAndFilter: {
        width: wp(100),
        height: sp(12),
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: sp(20),
        alignItems: 'center',
        flexDirection: 'row',

    },
    item: {
        flexDirection: 'row',
        height: sp(12),
        alignItems: 'center',
        paddingHorizontal: sp(3)
    },

    itemText: {
        fontSize: sp(4),
        marginLeft: sp(4)
    },
    product: {
        width: wp(50) - 4
    },
    productView: {
        height: sp(50),
        width: wp(50) - 4,
        backgroundColor: '#f7f7f7'
    },
    productBody: {
        padding: sp(3),
        backgroundColor: 'white'
    },
    productBrand: {
        fontSize: sp(4.5),
        marginBottom: sp(1.5)
    },
    productPrice: {
        flexDirection: 'row',
        marginBottom: sp(1.5)
    },
    price: {
        fontSize: sp(4),
        marginRight: sp(0.5)
    },
    priceRoot: {
        fontSize: sp(3.7),
        marginRight: sp(0.5),
        textDecorationLine: 'line-through',
        color: "gray"
    },
    saleOff: {
        fontSize: sp(3.5),
        color: "#00BBE1"
    },
    titleModalSort: {
        textAlign: 'center',
        marginVertical: sp(3),
        fontSize: sp(5.5)
    },
    devide: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#eeeeee'
    },
    bodyModalSort: {

    },
    buttonSortBy: {
        height: sp(12),
        justifyContent: 'center'
    },
    sortByText: {
        fontSize: sp(5.5),
        textAlign: 'center',
    },
    wrapModal: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: hp(100),
        width: wp(100)
    },
    modalSort: {
        position: 'absolute',
        bottom: 0,
        width: wp(100),
        paddingBottom: sp(8),
        backgroundColor: 'white'
    },
    modalFilter: {
        height: hp(100),
        width: wp(100),
        backgroundColor: "white",
    },
    headerModalFilter: {
        padding: sp(4),
        height: sp(15),
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleModalFilter: {
        marginLeft: sp(5),
        fontSize: sp(5)
    },
    buttonCancelModalFilter: {
    },
    bodyModalFilter: {
        width: wp(100),
        height: "100%",
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    listTag: {
        width: wp(35) - 1,
        borderRightWidth: 1,
        borderColor: '#eeeeee'
    },
    tagView: {
        height: sp(16)
    },
    buttonTag: {
        height: sp(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTag: {
        fontSize: sp(5)
    },
    listFilter: {
        backgroundColor: "#e2e2e2",
        width: wp(70)
    },
    filterView: {

    },
    filterButton: {
        paddingVertical: sp(4),
        justifyContent: 'center'
    },
    filterText: {
        fontSize: sp(5),
        marginLeft: wp(3)
    }
})