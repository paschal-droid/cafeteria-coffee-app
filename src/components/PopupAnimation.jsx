import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import {FontWeight, Scaling, Themes} from '../theme'
import LottieView from 'lottie-react-native';

const {horizontalScale, verticalScale, fontScale} = Scaling;
const {COLOR} = Themes

const PopupAnimation = (props) => {
  return (
    <View style={styles.lottieAnimationContainer}>
      <LottieView autoPlay loop={false} style={props.style} source={props.source} />
    </View>
  )
}

PopupAnimation.propTypes = {
    style: PropTypes.object.isRequired,
    source: PropTypes.any.isRequired
}

export default PopupAnimation

const styles = StyleSheet.create({
    lottieAnimationContainer: {
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: COLOR.secondaryBlackRGBA,
        justifyContent: 'center'
    },
})