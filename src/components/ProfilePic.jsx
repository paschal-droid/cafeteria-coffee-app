import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Scaling, Themes } from '../theme'
import PropTypes from 'prop-types'

const ProfilePic = (props) => {
  return (
    <View style={[styles.imageContainer, props.containerStyles]}>
      <Image source={require('../assets/app_images/avatar.png')} style={[styles.image, props.imageStyles]} />
      {props.badge && <View style={styles.badge} />}
    </View>
  )
}

ProfilePic.propTypes = {
  containerStyles: PropTypes.any,
  imageStyles: PropTypes.any,
  badge: PropTypes.bool.isRequired
}

export default ProfilePic

const styles = StyleSheet.create({
    imageContainer: {
        height: Scaling.verticalScale(45),
        width: Scaling.horizontalScale(45),
        borderRadius: Scaling.horizontalScale(45),
        borderWidth: .5,
        borderColor: Themes.COLOR.primaryPinkHex,
        alignItems: 'center',
        justifyContent: "center",
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 45
    },
    badge: {
      height: Scaling.verticalScale(11),
      width: Scaling.horizontalScale(11),
      backgroundColor: Themes.COLOR.primaryPinkHex,
      borderRadius: Scaling.verticalScale(15),
      position: 'absolute',
      top: Scaling.verticalScale(-2),
      right: Scaling.horizontalScale(1),
      zIndex: 2
    }
})