import React from 'react'
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Header } from 'react-navigation'
import CategoryItem from '../components/CategoryItem'
import BoxSearch from '../components/BoxSearch'


export default class CategoriesScreen extends React.Component {
    static navigationOptions = {
        headerRight: <BoxSearch heightHeader={Header.HEIGHT} />
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                    {[{
                        category: "WOMAN",
                        label: "Kurtas & Suits, Top & Tees…",
                        fromColor: "#f7ccc0",
                        toColor: "#DECAC9"
                    },
                    {
                        category: "MEN",
                        label: "Shirts, T-shirts, Jeans, lower…",
                        fromColor: "#98cff2",
                        toColor: "#a1d0ed"
                    },
                    {
                        category: "KIDS",
                        label: "Apparel, shoes, toys, bags...",
                        fromColor: "#f7add1",
                        toColor: "#f7c5dd"
                    },
                    {
                        category: "ACCESSORIES",
                        label: "Everything that’s new & Now",
                        fromColor: "#f7816f",
                        toColor: "#e8a79d"
                    }].map((item, key) => (
                        <TouchableWithoutFeedback
                            key={key}
                            onPress={() => {
                                navigation.navigate("Category")
                            }
                            }
                        >
                            <View>
                                <CategoryItem {...item} />
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})