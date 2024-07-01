import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Scaling } from '../../theme';

const OrderItem = props => {
  return (
    <View style={styles.orderItemSection}>
      <View style={styles.section1}>
        <View style={styles.orderItemImageContainer}>
          <Image source={props.imageLink} style={styles.orderItemImage} />
          <View style={styles.orderItemInfo}>
            <Text style={styles.orderItemName}>{props.name}</Text>
            <Text style={styles.orderItemIngredient}>
              {props.specialIngredient}
            </Text>
          </View>
        </View>
        <Text style={styles.orderPriceText}><Text style={styles.dollarText}>$</Text> {props.itemPrice}</Text>
      </View>

      <View style={styles.section2}>
        {props.prices != 1 ? (
          props.prices.map((item, i) => (
            <View style={styles.orderItemPriceExtraInfo} key={i.toString()}>
              <View style={styles.orderItemPriceInfo1}>
                <View style={styles.orderItemSize}>
                  <Text style={[styles.orderItemSizeText, {fontSize: props.type == 'Coffee' ? Scaling.fontScale(16): Scaling.fontScale(10)}]}>{item.size}</Text>
                </View>
                <View style={styles.orderItemPrice}>
                  <Text style={[styles.orderItemPriceText]}><Text style={styles.dollarText}>$</Text> {item.price}</Text>
                </View>
              </View>
              <View style={styles.orderItemPriceInfo2}>
                <Text style={styles.orderItemQuantityText}><Text style={styles.dollarText}>X</Text> {item.quantity}</Text>
              </View>
              <View style={styles.orderItemPriceInfo3}>
                <Text style={styles.orderItemTotalPriceText}>{(item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
          ))
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.any.isRequired,
  prices: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  specialIngredient: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
};

export default OrderItem;

