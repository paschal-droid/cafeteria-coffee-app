import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomIcon } from '.';
import { Scaling, Themes } from '../theme';
import PropTypes from 'prop-types'



const GradientBGIcon = (props) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[Themes.COLOR.primaryBrownHex, Themes.COLOR.secondaryLightBrownHex]}
        style={styles.LinearGradientBG}>
        <CustomIcon name={props.name} color={props.color} size={props.size} />
      </LinearGradient>
    </View>
  );
};

GradientBGIcon.propTypes ={
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: Themes.COLOR.primaryLightBrownHex,
    borderRadius: Scaling.fontScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Themes.COLOR.primaryLightBrownHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: Scaling.verticalScale(30),
    width: Scaling.horizontalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientBGIcon;