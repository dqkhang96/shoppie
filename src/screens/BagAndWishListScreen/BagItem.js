import React from 'react'
import { View, Text,  TouchableNativeFeedback,TouchableOpacity,Image } from 'react-native'
import Icons from '../../../res/icons';
import Size from '../../theme/sizes';
import styles from '../../theme/screens/BagAndWishListScreen/BagItem'
import Menu, { MenuItem } from 'react-native-material-menu';
import Color from '../../theme/colors';
import {connect} from 'react-redux'
import {removeFromCart} from '../../redux/actions'

class BagItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            size:-1,
            color:-1
        }

        this.colors=["Red","Green","Blue"]
        this.sizes=["XL","XX","LL"]
        this.showColorMenu = this.showColorMenu.bind(this)
        this.showSizeMenu = this.showSizeMenu.bind(this)
        this.hideColorMenu = this.hideColorMenu.bind(this)
        this.hideSizeMenu = this.hideSizeMenu.bind(this)
        this.selectColor=this.selectColor.bind(this)
        this.selectSize=this.selectSize.bind(this)
    }

    showColorMenu() {
        this.colorInput.show()
    }

    showSizeMenu() {
        this.sizeInput.show()
    }

    hideColorMenu() {
        this.colorInput.hide()
    }

    hideSizeMenu() {
        this.sizeInput.hide()
    }

    selectColor(color){
        this.setState({color})
        this.hideColorMenu()
    }

    selectSize(size){
        this.setState({size})
        this.hideSizeMenu()
    }


    _renderButtonSelect(label,onPress){
        return(
            <TouchableNativeFeedback
                onPress={onPress}
            >
                <View style={styles.selectButton}>
                    <Text style={styles.selectButtonLabel}>{label}</Text>
                    <Icons.CaretDown height={Size.Icon.height*0.4} width={Size.Icon.width*0.4}/>
                </View>    
            </TouchableNativeFeedback>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.image} source={{uri:this.props.product.urlImage}} />
                    <View style={styles.infor}>
                        <Text style={styles.title}>{this.props.product.name}</Text>
                        <Text style={styles.name}>Men’s Slim Fit Printed jacket</Text>
                        <View style={styles.groupViewInputSelect}>
                            <View style={styles.viewInputSelect}>
                                <Text style={styles.labelInput}>Size</Text>
                                <Menu
                                    ref={ref => this.sizeInput = ref}
                                    button={this._renderButtonSelect(this.state.size>-1?this.sizes[this.state.size]:" ",this.showSizeMenu)}
                                >
                                   {this.sizes.map((size,key)=>(
                                       <MenuItem textStyle={styles.menuItem}  key={key} onPress={()=>this.selectSize(key)}>{size}</MenuItem>
                                   ))}
                                </Menu>
                            </View>
                            <View style={styles.viewInputSelect}>
                                <Text style={styles.labelInput}>Color</Text>
                                <Menu
                                    ref={ref => this.colorInput = ref}
                                    button={this._renderButtonSelect(this.state.color>-1?this.colors[this.state.color]:" ",this.showColorMenu)}
                                >
                                    {this.colors.map((color,key)=>(
                                       <MenuItem textStyle={styles.menuItem} key={key} onPress={()=>this.selectColor(key)}>{color}</MenuItem>
                                   ))}
                                </Menu>
                            </View>
                        </View>
                        <View style={styles.viewPrice}>
                            <Text style={styles.price}>Rs. 2,100</Text>
                            <Text style={styles.rootPrice}>Rs. 2,200</Text>
                            <Text style={styles.saleOff}>65% off</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.gift}>Gift Wrap available</Text>
                <View style={styles.devide} />
                <View style={styles.offer}>
                    <Icons.Percel width={Size.Icon.width} height={Size.Icon.height} fill={Color.primary} />
                    <Text style={styles.titleOffer}>2 Offers Applicable for this Product</Text>
                </View>

                <View style={styles.deleteBagItem}>
                    <TouchableOpacity
                        onPress={()=>this.props.remove(this.props.product.id)}
                    >
                        <Icons.Trash height={Size.Icon.height} width={Size.Icon.width} fill={Color.primary}/>
                     </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProp=dispatch=>({
    remove:(id)=>dispatch(removeFromCart(id))
})

export default connect(null,mapDispatchToProp)(BagItem)

