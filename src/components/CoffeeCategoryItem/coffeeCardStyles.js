import { StyleSheet } from "react-native"
import { FontWeight, Scaling, Themes } from '../../theme'

const styles = StyleSheet.create({
    coffeeCard: {
        width: Scaling.horizontalScale(148),
        borderRadius: Scaling.fontScale(20),
        alignItems: 'center',
        marginRight: Scaling.horizontalScale(15),
        paddingHorizontal: Scaling.horizontalScale(4)
    },
    imageContainer: {
      paddingVertical: 10,
    },
    coffeeImage: {
      height: Scaling.verticalScale(126),
      width: Scaling.horizontalScale(126),
      overflow: 'hidden',
      position:'relative',
      borderRadius: Scaling.fontScale(25),
    },
    ratings: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: Themes.COLOR.ratingsBackground,
      paddingHorizontal: Scaling.horizontalScale(20),
      paddingLeft: Scaling.horizontalScale(10),
      paddingVertical: Scaling.verticalScale(8),
      paddingBottom: Scaling.verticalScale(4),
      borderRadius: Scaling.fontScale(10),
      right: Scaling.horizontalScale(-9),
      top: Scaling.verticalScale(-4)
      
    },
    ratingsText: {
      fontFamily: FontWeight('Poppins', '500'),
      fontSize: Scaling.fontScale(13),
      color: Themes.COLOR.primaryLightWhiteHex,
      marginLeft: Scaling.horizontalScale(3),
      letterSpacing: 0.8
    },

    textContainer: {
      marginVertical: Scaling.verticalScale(5),
      gap: 2
    },
    headerText: {
      fontFamily: FontWeight("Poppins", "600"),
      color: Themes.COLOR.primaryLightWhiteHex,
      fontSize: Scaling.fontScale(15),
     
    },
    text: {
      fontFamily: FontWeight("Poppins", "400"),
      color: Themes.COLOR.primaryLightWhiteHex,
      fontSize: Scaling.fontScale(12),
    },
    actions: {
      paddingBottom: Scaling.verticalScale(15),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: Scaling.horizontalScale(5),
    },
    price: {
      fontFamily: FontWeight("Poppins", "600"),
      fontSize: Scaling.fontScale(17),
      color: Themes.COLOR.primaryLightWhiteHex
    },
    addButton: {
      height: Scaling.verticalScale(25),
      width: Scaling.verticalScale(25),
      backgroundColor: Themes.COLOR.primaryPinkHex,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Scaling.fontScale(10)
    },


})

export default styles