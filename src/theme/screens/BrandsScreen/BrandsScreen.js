
import {StyleSheet} from 'react-native'
import {Size,SCREEN_WIDTH} from '../../sizes'

export default styles=StyleSheet.create({
    container:{
        flex:1
    },
    mostBrandsContainer:{
        marginBottom:Size.Section.Margin.bottom
    },
    titleMostBrands:{
        textAlign:'center',
        fontSize:Size.Text.pageTitle,
        marginBottom:Size.Section.Margin.bottom,
        marginTop:Size.Section.Margin.top
    },
    brand:{
        marginLeft:Size.Section.Margin.left,
        width:(SCREEN_WIDTH-4*Size.Section.Margin.left)/3,
        height:(SCREEN_WIDTH-4*Size.Section.Margin.left)/3*1.4,
    },
    brandFooter:{
        backgroundColor:'white',
        paddingHorizontal:Size.Section.padding
    },
    brandFooterText:{
        fontSize:Size.Text.normal,
        textAlign:'center'
    },
    brandView:{
        backgroundColor:"#EEEEEE",
        width:(SCREEN_WIDTH-4*Size.Section.margin)/3-2,
        height:(SCREEN_WIDTH-4*Size.Section.margin)/3,
    },
    brandBody:{
        paddingVertical:Size.Section.padding,
        justifyContent:'center',
        alignItems:'center',
      
    },
    brandTitle:{
        textAlign:'center',
        fontSize:Size.Text.normal
    }
})