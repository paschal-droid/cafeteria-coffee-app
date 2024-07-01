import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CustomIcon } from '..';
import { Scaling, Themes, FontWeight } from "../../theme"
import LinearGradient from 'react-native-linear-gradient';

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const CreditCard = () => {
  return (
    <LinearGradient
      useAngle={true}
      angle={45}
      angleCenter={{x: 0.4, y: 0.1}}
      colors={[
        COLOR.linearGradientColor1,
        COLOR.linearGradientColor2,
        COLOR.linearGradientColor1,
      ]}
      style={styles.creditCardComponents}>
      <View style={styles.creditCardTypeContainer}>
        <CustomIcon
          color={COLOR.primaryPinkHex}
          size={fontScale(30)}
          name="chip"
        />
        <CustomIcon size={fontScale(50)} name="visa" />
      </View>
      <View style={styles.creditCardNumberContainer}>
        <Text style={styles.creditCardNumberText}>3897 8923 6745 4638</Text>
      </View>
      <View style={styles.creditCardHolderInfoContainer}>
        <View>
          <Text style={styles.creditCardHolderInfoTitle}>Card Holder Name</Text>
          <Text style={styles.creditCardHolderInfoDetails}>Alexander Paul</Text>
        </View>
        <View>
          <Text style={styles.creditCardHolderInfoTitle}>Expiry Date</Text>
          <Text style={styles.creditCardHolderInfoDetails}>02/30</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
    creditCardComponents: {
        height: horizontalScale(165),
        justifyContent: 'space-between',
        padding: verticalScale(10),
    },
    creditCardTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: verticalScale(4)
    },
    creditCardNumberContainer: {
        justifyContent: 'center',
    },
    creditCardNumberText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(18),
        lineHeight: fontScale(20),
        letterSpacing: fontScale(4)
    },
    creditCardHolderInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: verticalScale(4)
    },
    creditCardHolderInfoTitle: {
        fontFamily: FontWeight("Poppins", "400"),
        fontSize: fontScale(10),
    },
    creditCardHolderInfoDetails: {
        fontFamily: FontWeight("Poppins", "500"),
        fontSize: fontScale(16),
        lineHeight: fontScale(20)

    },
});
