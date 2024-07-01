import { StyleSheet } from "react-native"
import { FontWeight, Scaling, Themes } from "../../theme";

const {verticalScale, fontScale, horizontalScale} = Scaling
const {COLOR} = Themes

const styles = StyleSheet.create({
    descriptionContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(15),
        flex: 1,
    },
    description: {
        gap: 5,
        flex: 1
    },
    descHeaderText: {
       fontFamily: FontWeight("Poppins", "600"),
       fontSize: fontScale(14),
       color: COLOR.secondaryBrownHex
    },
    descText: {
       fontFamily: FontWeight("Poppins", "400"),
       fontSize: fontScale(12),
       color: '#FAFDF6',
       lineHeight: fontScale(20)
    },
    sizeContainer: {
        marginTop: verticalScale(5),
        gap: 4
    },
    sizeOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        gap: 15
    },
    sizeOptionFocused: {
        borderColor: COLOR.primaryPinkHex,
        borderWidth: 2,
    },
    sizeOption: {
        height: verticalScale(35),
        width: horizontalScale(90),
        borderRadius: fontScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.primaryLightBrownHex
    },
    sizeOptionTextBean: {
        fontFamily: FontWeight('Poppins', "500"),
        fontSize: fontScale(12)
    },
    sizeOptionTextCoffee: {
        fontFamily: FontWeight('Poppins', "500"),
        fontSize: fontScale(16)
    }
})

export default styles