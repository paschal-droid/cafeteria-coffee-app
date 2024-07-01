import propTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { FontWeight, Scaling, Themes } from '../theme'


const ProfileTabTitle = (props) => {
  return (
    <View>
        <Text style={[styles.profileTabTitle, !props.isFocused && styles.profileTabTitleNotFocused]}>{props.title}</Text>
    </View>
  )
}

ProfileTabTitle.propTypes = {
    title: propTypes.string.isRequired,
    isFocused: propTypes.bool.isRequired
}


const styles = StyleSheet.create({
  profileTabTitle: {
    fontFamily: FontWeight('Poppins', '500'),
    color: Themes.COLOR.primaryLightWhiteHex,
    fontSize: Scaling.fontScale(10),
    marginBottom: Scaling.verticalScale(14),
},
profileTabTitleNotFocused: {
    fontFamily: FontWeight('Poppins', '400'),
    color: Themes.COLOR.primaryLightWhiteHex,
    fontSize: Scaling.fontScale(10)
},
})

export default ProfileTabTitle