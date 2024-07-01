import { StyleSheet } from "react-native"
import { Scaling, Themes, FontWeight } from "../../theme"

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    mainOrderSection: {
        marginVertical: verticalScale(10)
    },
    orderInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(10)
    },
    orderDateContainer: {

    },
    orderSection: {
        borderRadius: horizontalScale(20),
        marginBottom: verticalScale(15)
    },
    orderDateTitle: {
        fontFamily: FontWeight("Poppins", '600'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14)
    },
    orderDateText: {
        fontFamily: FontWeight("Poppins", '300'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14),
        color: COLOR.secondaryBrownHex

    },
    cartPriceText: {
        fontFamily: FontWeight("Poppins", '600'),
        lineHeight: fontScale(20),
        fontSize: fontScale(14),
        color: COLOR.secondaryBrownHex
    },
    orderItemSection: {
        marginVertical: verticalScale(5),
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(15)
    },
    section1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderItemImageContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    orderItemImage: {
        width: horizontalScale(55),
        height: horizontalScale(55),
        borderRadius: horizontalScale(10),
    },
    orderItemInfo: {

    },
    orderItemName: {
        fontFamily: FontWeight("Poppins", "400"),
        fontSize: fontScale(16),
        lineHeight: fontScale(20)
    },
    orderItemIngredient: {
        fontFamily: FontWeight("Poppins", "400"),
        fontSize: fontScale(10),
    },
    orderPriceText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(20),
    },
    section2: {
        marginTop: verticalScale(8)
    },
    orderItemPriceExtraInfo: {
        marginVertical: verticalScale(4),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderItemPriceInfo1: {
        flexDirection: 'row',
        backgroundColor: COLOR.primaryLightBrownHex,
        borderRadius: horizontalScale(10),
        width: horizontalScale(135),
        height: horizontalScale(35),
        alignItems: 'center',
        gap: 10
    },
    orderItemSize: {
        alignItems: 'center',
        flex: .4,
        borderRightWidth: .5,
        height: '100%',
        justifyContent: 'center',
        borderRightColor: COLOR.primaryLightWhiteHex

    },
    orderItemSizeText: {
        fontFamily: FontWeight("Poppins", "500")
    },
    orderItemPrice: {
        flex: .6,
    },
    orderItemPriceText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(16),

    },
    orderItemPriceInfo2: {
        height: horizontalScale(35),
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderItemQuantityText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(16),

    },
    orderItemPriceInfo3: {
        height: horizontalScale(35),
        width: horizontalScale(40),
        alignItems: 'center',
        justifyContent: 'center'

    },
    orderItemTotalPriceText: {
        fontFamily: FontWeight("Poppins", "600"),
        fontSize: fontScale(16),
        color: COLOR.secondaryBrownHex

    },
    dollarText: {
        color: COLOR.secondaryBrownHex
    },
    horizontalLine: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: COLOR.secondaryBrownHex,
    }
})

export default styles