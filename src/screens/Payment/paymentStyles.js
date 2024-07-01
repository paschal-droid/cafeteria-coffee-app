import { StyleSheet } from "react-native"
import { Scaling, Themes, FontWeight } from "../../theme"

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: horizontalScale(30)
    },
    innerScreen: {
        flex: 1,
        justifyContent: 'space-between',
    },
    paymentFooter: {
        marginHorizontal: horizontalScale(15),
        marginBottom: verticalScale(20)
    },
    creditCardContainer: {
        borderWidth: 4,
        padding: horizontalScale(14),
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(2),
        borderRadius: horizontalScale(26),
        justifyContent: 'space-between'
    },
    creditCardText: {
        fontFamily: FontWeight("Poppins", "600"),
        marginBottom: verticalScale(10),
        fontSize: fontScale(14),
        lineHeight: fontScale(20)
    },
    lottieStyles: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default styles