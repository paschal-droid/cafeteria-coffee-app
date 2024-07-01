import { ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import { Themes } from '../../theme'
import { OrderItem } from '..';

const HistoryCard = (props) => {
  return (
    <View style={styles.mainOrderSection}>
      <View style={styles.orderInfoContainer}>
        <View style={styles.orderDateContainer}>
          <Text style={styles.orderDateTitle}>Order Date</Text>
          <Text style={styles.orderDateText}>{props.orderDate}</Text>
        </View>
        <View style={styles.orderDateContainer}>
          <Text style={styles.orderDateTitle}>Total Amount</Text>
          <Text style={styles.cartPriceText}>$ {props.cartListPrice}</Text>
        </View>
      </View>
      {props.cartList.map((data, i) => (
    <LinearGradient key={i.toString() + data.id} useAngle={true} angle={45} angleCenter={{ x: 0.4, y: 0.1 }} style={styles.orderSection} colors={[Themes.COLOR.linearGradientColor1,Themes.COLOR.linearGradientColor2, Themes.COLOR.linearGradientColor1]}>
        <Pressable onPress={() => {props.navigationHandler(data.type, data.id, data.index)}}>
            <OrderItem
            id={data.id}
            itemPrice={data.itemPrice}
            name={data.name}
            specialIngredient={data.special_ingredient}
            prices={data.prices}
            type={data.type}
            imageLink={data.imagelink_square}
            />
        </Pressable>
    </LinearGradient>
        ))}
    <View style={styles.horizontalLine} />
  </View>
  )
}

HistoryCard.propTypes = {
    cartList: PropTypes.array.isRequired,
    cartListPrice: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    navigationHandler: PropTypes.func
}

export default HistoryCard
