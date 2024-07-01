import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Scaling, Themes, FontWeight } from "../../theme"
import LinearGradient from 'react-native-linear-gradient';
import { CustomIcon } from '..';

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const PaymentMethod = (props) => {
  return (
    <View style={[styles.paymentCardContainer, {borderColor: props.paymentMode == props.name ? COLOR.primaryPinkHex: COLOR.primaryGreyHex}]}>
      {props.isIcon ? <LinearGradient style={styles.gradientWallet} useAngle={true} angle={15} angleCenter={{ x: 0.4, y: 0.1 }} colors={[COLOR.linearGradientColor1,COLOR.linearGradientColor2, COLOR.linearGradientColor1]}>
        <View style={styles.walletRow}>
          <CustomIcon name='wallet' color={COLOR.primaryPinkHex} size={fontScale(30)} />
          <Text style={styles.paymentTitle}>{props.name}</Text>
        </View>
          <Text style={styles.paymentPrice}>$ 100.50</Text>
      </LinearGradient>
      :
      <LinearGradient style={styles.gradient} useAngle={true} angle={15} angleCenter={{ x: 0.4, y: 0.1 }} colors={[COLOR.linearGradientColor1, COLOR.linearGradientColor2, COLOR.linearGradientColor1]}>
        <Image source={props.icon} style={styles.paymentImage} />
        <Text style={styles.paymentTitle}>{props.name}</Text>
      </LinearGradient>
      }
    </View>
  )
}

PaymentMethod.propTypes ={
  name: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  isIcon: PropTypes.bool.isRequired,
  paymentMode: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  paymentCardContainer: {
    borderRadius: horizontalScale(30),
    marginVertical: verticalScale(2),
    marginHorizontal: horizontalScale(10),
    borderWidth: 4
  },
  gradient: {
    borderRadius: horizontalScale(30),
    width: '100%',
    height: horizontalScale(50),
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: horizontalScale(24),
    alignItems: 'center'
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  gradientWallet: {
    borderRadius: fontScale(25),
    width: '100%',
    height: horizontalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
  },
  paymentTitle: {
    fontFamily: FontWeight("Poppins", "600"),
    fontSize: fontScale(14)
  },
  paymentPrice: {
    fontFamily: FontWeight("Poppins", "400"),
    fontSize: fontScale(14)
  },
  paymentImage: {
    width: horizontalScale(30),
    height: horizontalScale(30)
  },

})


export default PaymentMethod
