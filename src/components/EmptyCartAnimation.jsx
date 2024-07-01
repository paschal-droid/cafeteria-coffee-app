import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'
import {FontWeight, Scaling, Themes} from '../theme'

const {horizontalScale, verticalScale, fontScale} = Scaling;
const {COLOR} = Themes

const EmptyCartAnimation = ({title}) => {
  return (
    <View style={styles.emptyCartContainer}>
      <LottieView autoPlay loop style={styles.lottieStyles} source={require("../lottie/coffeecup.json")} />
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  )
}

EmptyCartAnimation.propTypes = {
    title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    emptyCartContainer: {
        flex: .5,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    lottieStyles: {
        height: verticalScale(300),
    },
    lottieText: {
        fontFamily: FontWeight("Poppins", "700"),
        fontSize: fontScale(20),
        color: COLOR.secondaryBrownHex,
        textAlign: 'center'
    },
})

export default EmptyCartAnimation
