import { StyleSheet } from "react-native";
import { FontWeight, Scaling, Themes } from "../../theme";

const {verticalScale, fontScale, horizontalScale} = Scaling
const {COLOR} = Themes
const styles  = StyleSheet.create({
    background: {
        width: '100%',
        aspectRatio: 4 / 5,
        justifyContent: 'space-between'
    },
    headerBarWithBack: {
        padding: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerBarWithoutBack: {
        padding: horizontalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    backgroundContainerInfo: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(16),
        backgroundColor: COLOR.ratingsBackground,
        borderTopRightRadius: fontScale(30),
        borderTopLeftRadius: fontScale(30),
    },
    backgroundInnerContainerInfo: {
        gap: 10
    },
    background1InfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: verticalScale(2)
    },
    background2InfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
    },
    headerText: {
        fontSize: fontScale(20),
        fontFamily: FontWeight('Poppins', '600'),
        color: COLOR.primaryLightWhiteHex,
    },
    text: {
        fontSize: fontScale(12),
        color: COLOR.primaryLightWhiteHex,
        fontFamily: FontWeight('Poppins', "400"),
        lineHeight: fontScale(20)
    },
    coffeeIcons: {
        flexDirection: 'row',
        gap: 22,

    },
    icons: {
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(6),
        borderRadius: fontScale(10),
        backgroundColor: COLOR.primaryLightBrownHex,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
    },
    iconText: {
        fontSize: Scaling.fontScale(10), 
        fontFamily: FontWeight('Poppins', '500'),
        color: COLOR.primaryLightWhiteHex,
        lineHeight: fontScale(20),
    },
    ratings: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    mainText: {
        fontFamily: FontWeight('Poppins', '600'),
        fontSize: fontScale(16),
        color: COLOR.primaryLightWhiteHex
    },
    miniText: {
        fontFamily: FontWeight('Poppins', '400'),
        fontSize: fontScale(10),
        color: COLOR.primaryLightWhiteHex 
    },
    roastedContainer: {
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(20),
        borderRadius: fontScale(10),
        backgroundColor: COLOR.primaryLightBrownHex
    },
    roastedText: {
        fontSize: Scaling.fontScale(10), 
        fontFamily: FontWeight('Poppins', '500'),
        color: COLOR.primaryLightWhiteHex,
        lineHeight: fontScale(20),

    },
    
})

export default styles