import { StyleSheet } from "react-native";
import { FontWeight, Scaling, Themes } from "../../theme";

const {verticalScale, fontScale, horizontalScale} = Scaling
const {COLOR} = Themes

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: verticalScale(22),
        paddingBottom: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        textAlign: 'center',
        alignItems: 'center'
    },
    priceTitle: {
        fontFamily: FontWeight("Poppins", "500"),
        fontSize: fontScale(12),
        color: COLOR.secondaryBrownHex,
        lineHeight: fontScale(20)
 
    },
    priceText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(20),
    },
    addToCart: {
        width: horizontalScale(220),
        height: verticalScale(55),
        backgroundColor: COLOR.primaryPinkHex,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: fontScale(20)
    },
    addToCartText: {
        fontFamily: FontWeight('Poppins', "600"),
        fontSize: fontScale(18)
    }
})

export default styles