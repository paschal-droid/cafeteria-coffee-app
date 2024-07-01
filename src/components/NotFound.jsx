import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/styles/globalStyles'
import suprise from '../assets/app_images/surprised.png'
import propTypes from 'prop-types'
import { FontWeight, Scaling, Themes } from '../theme'


const NotFound = (props) => {
  return (
    <View style={[styles.errorContainer, globalStyles.app]}>
      <Image source={suprise} style={styles.errorImage} />
      <Text style={styles.errorText}>{props.errorMsg}</Text>
    </View>
  )
}

NotFound.propTypes = {
    errorMsg: propTypes.string.isRequired
}

export default NotFound



const styles = StyleSheet.create({
  errorContainer: {
    height: Scaling.verticalScale(100),
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  errorImage: {
    height: Scaling.verticalScale(55) ,
    width: Scaling.horizontalScale(60)
  },
  errorText: {
    fontFamily: FontWeight('Poppins', '800'),
    fontSize: Scaling.fontScale(16),    
  }
})