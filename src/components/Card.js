import React from 'react'
import { View, StyleSheet } from 'react-native'

export const CardBody = ({ children, style }) => (
    <View
        style={[style]}
    >
        {children}
    </View>
)

export const CardView = ({ height, width, footer, footerStyle, children ,style}) => (
    <View style={[style,{ height, width, alignItems: 'center' }]}>
        {children}
        <View style={[{ position: 'absolute', bottom: 0 },footerStyle]}>
            {footer}
        </View>
    </View>
)

export default class Card extends React.Component {
    render() {
        const { style, children } = this.props
        var cardBody = null, cardView = null
        if (Array.isArray(children))
            children.forEach(child => {
                if (child.type.name === 'CardBody')
                    cardBody = child
                else cardView = child
            })
        else
            if (children.type.name === 'CardBody')
                cardBody = children
            else cardView = children
        return (
            <View style={[style, styles.container]}>
                {cardView ? cardView : null}
                {cardBody ? cardBody : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: "#EEEEEE"
    }
})