import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import globalStyles from '../assets/styles/globalStyles'
import { FontWeight, Scaling, Themes } from '../theme'


const Tab = (props) => {
 
  return (
    <Pressable disabled={props.isDisabled} onPress={props.onPress} style={[styles.tabContainer]}>
      <View style={styles.tab} disabled={props.isDisabled}>
        <Text style={[styles.text, props.isInactive && styles.inactiveText]}>{props.name}</Text>
        {!props.isInactive && <View style={styles.badge} />}
    </View>
    </Pressable>
  )
}

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}

Tab.defaultProps = {
    isDisabled: false,
    onPress: () => {},
    tabId: PropTypes.number.isRequired,
    isInactive: true
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center'
  },
  tabContainer: {
    paddingHorizontal: Scaling.horizontalScale(12),
    marginTop: Scaling.verticalScale(10)
  },
  text: {
    color: Themes.COLOR.primaryPinkHex,
    fontFamily: FontWeight('Poppins', "600"),
    fontSize: Scaling.fontScale(17),
    marginBottom: Scaling.verticalScale(4),  
  },
  inactiveText: {
    color: Themes.COLOR.primaryLightWhiteHex,
    fontFamily: FontWeight('Poppins', "600"),
    fontSize: Scaling.fontScale(17),

  },
  badge: {
    height: Scaling.verticalScale(8),
    width: Scaling.horizontalScale(8),
    backgroundColor: Themes.COLOR.primaryPinkHex,
    borderRadius: Scaling.verticalScale(8),
  }

})

export default Tab