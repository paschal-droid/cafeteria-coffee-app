import { StyleSheet } from "react-native";
import { Scaling, Themes, FontWeight } from "../../theme"


const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    cartSection: {
        padding: horizontalScale(15),
        borderRadius: horizontalScale(10),
        marginVertical: verticalScale(8)
    },
    cartItemMainSection: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    cartImageContainer: {
    },
    cartItemImage: {
        width: horizontalScale(120),
        height: horizontalScale(120),
        overflow: 'hidden',
        borderRadius: horizontalScale(20)
    },
    cartItemImage2: {
        width: horizontalScale(100),
        height: horizontalScale(100),
        overflow: 'hidden',
        borderRadius: horizontalScale(20),
    },
    cartActionsContainer: {
        flex: 1,
        gap: 10
    },
    cartActionsTextContainer: {
    },
    actionTitle: {
        fontFamily: FontWeight("Poppins", "500"),
        fontSize: fontScale(15),
        lineHeight: fontScale(20),
        letterSpacing: 0.5,
        marginLeft: horizontalScale(4),
        color: COLOR.primaryLightWhiteHex
    },
    actionText: {
        fontFamily: FontWeight("Poppins", "800"),
        fontSize: fontScale(10),
        color: '#DAD8D8',
        marginLeft: horizontalScale(4),
    },
    cartActionsVariantsContainer: {
        flexDirection: 'row',
        gap: 35,
        alignItems: 'center',
    },
    variantSize: {
        backgroundColor: COLOR.primaryLightBrownHex,
        borderWidth: 1,
        borderColor: COLOR.primaryPinkHex,
        width: horizontalScale(65),
        height: horizontalScale(32),
        borderRadius: horizontalScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    variantSizeText: {
        fontFamily: FontWeight("Poppins", "500"),
        fontSize: fontScale(16),
        color: COLOR.primaryLightWhiteHex
    },
    variantPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    variantCurrencyText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(20),
        color: COLOR.primaryPinkHex
    },
    variantPriceText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(20),
        color: COLOR.primaryLightWhiteHex
    },
    cartActionsQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(12)
    },
    quantity: {
        width: horizontalScale(30),
        height: horizontalScale(30),
        alignItems: 'center',
        color: COLOR.primaryLightWhiteHex,
        justifyContent: 'center',
        backgroundColor: COLOR.primaryPinkHex,
        borderRadius: horizontalScale(8)
    },
    quantityValue: {
        width: horizontalScale(55),
        height: horizontalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.primaryLightBrownHex,
        borderRadius: horizontalScale(8),
        borderColor: COLOR.primaryPinkHex,
        borderWidth: horizontalScale(1.5)

    },
    quantityValueText: {
        fontFamily: FontWeight("Poppins", "800"),
        fontSize: fontScale(16),
        color: COLOR.primaryLightWhiteHex
    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    section2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainSection: {
        gap: 15,
        justifyContent: 'center'
    },
    variantCurrencyText2: {
        fontSize: fontScale(18),
        fontFamily: FontWeight("Poppins", "600"),
        color: COLOR.primaryPinkHex
    },
    variantPriceText2: {
        fontSize: fontScale(18),
        fontFamily: FontWeight("Poppins", "600"),
        color: COLOR.primaryLightWhiteHex

    },
    cartActionsQuantityContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(12)
    },
    cartActionsVariantsContainer2: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    cartActionsRoastedContainer: {
        width: horizontalScale(115),
        height: horizontalScale(35),
        backgroundColor: COLOR.primaryBrownHex,
        borderRadius: horizontalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(12)
    },
    cartActionsRoastedText: {
        fontSize: fontScale(10),
        fontFamily: FontWeight("Poppins", "500"),
        color: '#DAD8D8'

    }

})


export default styles