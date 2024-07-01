import {StyleSheet, Text, View } from 'react-native'
import React from 'react';
import PropTypes from 'prop-types'
import { Themes, Scaling, FontWeight } from '../theme';
import { Profile } from '.';
import globalStyles from '../assets/styles/globalStyles'

const HeaderBar = (props) => {
  return (
    <View style={[styles.headerContainer, globalStyles.app]}>
      <View>
        <Text style={styles.user}>Hello, {props.userName ? props.userName : 'User'}!</Text>
        <Text style={styles.headerText}>Find your best Coffee</Text>
      </View>
      <View>
        <Profile badge={true} />
      </View>
    </View>
  )
}

HeaderBar.propTypes = {
    userName: PropTypes.string,
}

HeaderBar.default = {
   
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingTop: Scaling.verticalScale(20),
        paddingBottom: Scaling.verticalScale(12)

    },
    headerText: {
      fontFamily: FontWeight('Poppins', '900'),
      fontSize: Scaling.fontScale(21),
      color: Themes.COLOR.primaryLightWhiteHex
    },
    user: {
      fontFamily: FontWeight('Poppins', "700"),
      color: Themes.COLOR.secondaryBrownHex,
      lineHeight: Scaling.fontScale(18),
    },

})

export default HeaderBar
