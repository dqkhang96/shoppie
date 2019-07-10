import React from 'react'
import {View,ScrollView , FlatList ,Text} from 'react-native'
import BannerBrand from '../../components/BannerBrand'
import Card,{CardBody,CardView} from '../../components/Card'
import Banner from '../../components/Banner'
import styles from '../../theme/screens/BrandsScreen/BrandsScreen'
import ButtonBackAndButtonMenu from '../../components/ButtonBackAndButtonMenu'

export default class BrandsScreen extends React.Component{

    static navigationOptions={
        title:"Brands",
        headerLeft:<ButtonBackAndButtonMenu/>
    }

    _renderMostBrands(){
        return(
            <View style={styles.mostBrandsContainer}>
                <Text style={styles.titleMostBrands}>Most Wanted Brands</Text>
                <FlatList numColumns={3}
                        keyExtractor={(item,index)=>"brand-"+index}
                        data={[1,2,3,4,5,6,7,8,9]}
                        renderItem={({item,index})=>(
                            <View style={styles.brand}>
                                <Card>
                                    <CardView footer={(
                                        <View style={styles.brandFooter}>
                                            <Text style={styles.brandFooterText}>Adidas</Text>
                                        </View> 
                                    )}>
                                        <View style={styles.brandView}/> 
                                    </CardView>
                                    <CardBody>
                                        <View style={styles.brandBody}>
                                            <Text style={styles.brandTitle}>upto 55% off</Text>
                                        </View>
                                    </CardBody>

                                </Card>
                            </View>
                        )}
                />
            </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <BannerBrand/>
                    {this._renderMostBrands()}
                    <Banner/>
                </ScrollView>
            </View>
        )
    }
}

