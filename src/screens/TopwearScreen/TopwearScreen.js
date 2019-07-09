import React from 'react'
import { View, StyleSheet, ScrollView, TouchableNativeFeedback, Text, FlatList, Modal } from 'react-native'
import Banner from '../../components/Banner'
import Icons from '../../../res/icons'
import Card, { CardBody, CardView } from '../../components/Card'
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'
import Color from '../../theme/colors';

import styles from '../../theme/screens/TopwearScreen/TopwearScreen'
import Size from '../../theme/sizes';

export default class TopwearScreen extends React.Component {

    static navigationOptions = {
        headerLeft: <ButtonBackAndButtonMenu />,
        title: "   Topwear"
    }

    constructor(props) {
        super(props)
        this.sortBy = ["Popularity", "New", "Discount", "Delivery Time", "Price: High - Low", "Price: High - Low", "Popularity", "New", "Discount", "Delivery Time", "Price: High - Low", "Price: High - Low", "Popularity", "New", "Discount", "Delivery Time", "Price: High - Low", "Price: High - Low"]
        this.filters = [
            {
                tag: "Categories",
                children: ["Cargos & Trousers", "Ethnic Wear", "Innerwear & Sleepwear", "Jackets", "Jeans", "T-Shirts", "Shorts", "Sportswear", "Swimwear", "Winterwear", "Handkerchieves",
                    "Cargos & Trousers", "Ethnic Wear", "Innerwear & Sleepwear", "Jackets", "Jeans", "T-Shirts", "Shorts", "Sportswear", "Swimwear", "Winterwear", "Handkerchieves",]
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

        this.toggleFilters = this.toggleFilters.bind(this)
        this.clearAllFilter = this.clearAllFilter.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
    }

    clearAllFilter() {
        this.setState({
            filterCategoriesTemp: [],
            filterBrandsTemp: [],
            filterSizeTemp: [],
            filterColorTemp: []
        })
    }

    applyFilter() {
        this.setState({
            filterCategories: [...this.state.filterCategoriesTemp],
            filterBrands: [...this.state.filterBrandsTemp],
            filterSize: [...this.state.filterSizeTemp],
            filterColor: [...this.state.filterColorTemp],
            showModalFilter: false
        })
    }

    _renderSortAndFilter() {
        return (
            <View style={styles.sortAndFilter}>
                <TouchableNativeFeedback
                    onPress={() => this.setState({ showModalSort: true })}
                >
                    <View style={styles.item}>
                        <Icons.Circle height={styles.circleItem.height} width={styles.circleItem.width} fill={this.hasSortBy() ? Color.primary : "gray"} />
                        <View style={styles.mr_2} />
                        <Icons.Sort height={Size.Icon.height} width={Size.Icon.width} />
                        <Text style={styles.itemText}>SORT</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => this.setState({
                        showModalFilter: true,
                        filterCategoriesTemp: [...this.state.filterCategories],
                        filterColorTemp: [...this.state.filterColor],
                        filterBrandsTemp: [...this.state.filterBrands],
                        filterSizeTemp: [...this.state.filterSize]
                    })}
                >
                    <View style={styles.item}>
                        <Icons.Circle height={styles.circleItem.height} width={styles.circleItem.width} fill={this.hasFilter() ? Color.primary : "gray"} />
                        <View style={styles.mr_2} />
                        <Icons.Filter height={Size.Icon.height} width={Size.Icon.width} />
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
                            onPress={() => this.props.navigation.navigate("Product")}
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
        const { filterCategoriesTemp, filterBrandsTemp, filterSizeTemp, filterColorTemp, indexTagFilterSelected } = this.state
        switch (indexTagFilterSelected) {
            case 0:
                if (filterCategoriesTemp.find((item => item == filter)) == undefined)
                    this.setState({ filterCategoriesTemp: [...filterCategoriesTemp, filter] })
                else this.setState({ filterCategoriesTemp: filterCategoriesTemp.filter(item => item != filter) })
                break;
            case 1:
                if (filterBrandsTemp.find((item => item == filter)) == undefined)
                    this.setState({ filterBrandsTemp: [...filterBrandsTemp, filter] })
                else this.setState({ filterBrandsTemp: filterBrandsTemp.filter(item => item != filter) })
                break;
            case 2:
                if (filterSize.find((item => item == filter)) == undefined)
                    this.setState({ filterSizeTemp: [...filterSizeTemp, filter] })
                else this.setState({ filterSizeTemp: filterSizeTemp.filter(item => item != filter) })
                break;
            case 3:
                if (filterColor.find((item => item == filter)) == undefined)
                    this.setState({ filterColorTemp: [...filterColorTemp, filter] })
                else this.setState({ filterColorTemp: filterColorTemp.filter(item => item != filter) })
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
        const { filterCategoriesTemp, filterBrandsTemp, filterSizeTemp, filterColorTemp, indexTagFilterSelected } = this.state
        switch (indexTagFilterSelected) {
            case 0:
                return filterCategoriesTemp.find(item => item == filter) != undefined
            case 1:
                return filterBrandsTemp.find(item => item == filter) != undefined
            case 2:
                return filterSizeTemp.find(item => item == filter) != undefined
            case 3:
                return filterColorTemp.find(item => item == filter) != undefined
        }

    }

    _renderModalFilter() {
        const filters = this.filters[this.state.indexTagFilterSelected].children
        return (
            <Modal visible={this.state.showModalFilter} transparent animationType="fade">
                <View style={styles.wrapModal}>
                    <View style={styles.modalFilter}>
                        <View style={styles.headerModalFilter}>
                            <TouchableNativeFeedback onPress={() => this.setState({ showModalFilter: false })}>
                                <View style={styles.buttonCancelModalFilter}>
                                    <Icons.Cancel height={styles.buttonCancelModalFilter.height} width={styles.buttonCancelModalFilter.width} fill="gray" />
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
                                <FlatList data={filters}
                                    keyExtractor={(item, key) => "filter-" + key}
                                    extraData={this.state}
                                    renderItem={({ item, index }) => (
                                        <TouchableNativeFeedback
                                            onPress={() => this.toggleFilters(index)}
                                        >
                                            <View style={styles.filterView}>
                                                <View style={styles.filterButton}>
                                                    <Text style={[styles.filterText, { color: this.isFilter(index) ? Color.primary : "black" }]}>{item}</Text>
                                                </View>
                                                {index < filters.length ? <View style={styles.devide} /> : null}
                                            </View>
                                        </TouchableNativeFeedback>
                                    )}
                                />
                            </View>
                        </View>
                        <View style={styles.footerFilterModal}>
                            <TouchableNativeFeedback
                                onPress={this.clearAllFilter}
                            >
                                <View style={styles.buttonFilter}>
                                    <Text style={styles.textButtonFilter}>Clear all</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <Text>|</Text>
                            <TouchableNativeFeedback
                                onPress={this.applyFilter}
                            >
                                <View style={styles.buttonFilter}>
                                    <Text style={styles.textButtonFilter}>Apply</Text>
                                </View>
                            </TouchableNativeFeedback>
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

