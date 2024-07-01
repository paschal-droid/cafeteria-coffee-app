import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './paymentStyles'
import PropTypes from 'prop-types'

const PaymentCard = (props) => {
  return (
    <View style={styles.priceContainer}>
    {props.price && props.title ? 
      <View style={styles.price}>
      <Text style={styles.priceTitle}>{props.title}</Text>
      <Text style={styles.priceText}>
        <Text style={{ color: Themes.COLOR.primaryPinkHex}}>$ </Text>
        {props.price}
      </Text>
    </View> : null  
  }
    <Pressable onPress={props.onAction} style={[styles.addToCart, props.styles]}>
      <Text style={styles.addToCartText}>{props.actionText}</Text>
    </Pressable>
  </View>
  )
}

PaymentCard.propTypes = {
    title: PropTypes.string,
    actionText: PropTypes.string.isRequired,
    price: PropTypes.string,
    styles: PropTypes.object,
    onAction: PropTypes.func.isRequired,

}

PaymentCard.default = {
    // onAction: () => {},
}

export default PaymentCard

