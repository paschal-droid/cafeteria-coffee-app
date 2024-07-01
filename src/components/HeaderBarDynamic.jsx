import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GradientIcon, Profile } from '.'
import { FontWeight, Scaling, Themes } from '../theme'
import PropTypes from 'prop-types'

const HeaderBarDynamic = (props) => {
  return (
    <View style={[styles.headerContainer, props.extraContainerStyle]}>
      {props.enableBack ? (
        <Pressable onPress={props.goBack}>
          <GradientIcon
            name={props.icon}
            color={Themes.COLOR.secondaryBrownHex}
            size={Scaling.fontScale(16)}
          />
        </Pressable>
      ) : (
        <GradientIcon
          name={props.icon}
          color={Themes.COLOR.secondaryBrownHex}
          size={Scaling.fontScale(16)}
        />
      )}
      <Text style={styles.headerText}>{props.title}</Text>
      {props.needProfile ? (
        <Profile
          containerStyles={{
            width: Scaling.horizontalScale(36),
            height: Scaling.verticalScale(36),
          }}
          imageStyles={{borderRadius: Scaling.fontScale(12)}}
          badge={false}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

HeaderBarDynamic.propTypes = {
  title: PropTypes.string.isRequired,
  needProfile: PropTypes.bool.isRequired,
  enableBack: PropTypes.bool.isRequired,
  goBack: PropTypes.func,
  extraContainerStyle: PropTypes.object,
  icon: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: Scaling.verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FontWeight('Poppins', '600'),
    fontSize: Scaling.fontScale(21),
    color: Themes.COLOR.primaryLightWhiteHex
  },
})

export default HeaderBarDynamic
