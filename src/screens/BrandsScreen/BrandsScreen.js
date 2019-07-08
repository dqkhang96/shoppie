import React from 'react'
import {View,ScrollView,StyleSheet , FlatList ,Text} from 'react-native'
import BannerBrand from '../../components/BannerBrand'
import Card,{CardBody,CardView} from '../../components/Card'
import { wp, sp } from '../../util';
import Banner from '../../components/Banner'


export default class BrandsScreen extends React.Component{


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

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    mostBrandsContainer:{
        marginBottom:sp(3)
    },
    titleMostBrands:{
        textAlign:'center',
        fontSize:sp(6),
        marginBottom:sp(3),
        marginTop:sp(3)
    },
    brand:{
        marginLeft:sp(3.5),
        width:(wp(100)-4*sp(3.5))/3,
        height:(wp(100)-4*sp(3.5))/3*1.4,
    },
    brandFooter:{
        backgroundColor:'white',
        paddingHorizontal:sp(2)
    },
    brandFooterText:{
        fontSize:sp(4),
        textAlign:'center'
    },
    brandView:{
        backgroundColor:"#EEEEEE",
        width:(wp(100)-4*sp(3.5))/3-2,
        height:(wp(100)-4*sp(3.5))/3,
    },
    brandBody:{
        paddingVertical:sp(2),
        justifyContent:'center',
        alignItems:'center',
      
    },
    brandTitle:{
        textAlign:'center',
        fontSize:sp(4)
    }
})