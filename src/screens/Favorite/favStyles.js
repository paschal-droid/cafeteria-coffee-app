import { StyleSheet } from "react-native"
import { Scaling, Themes, FontWeight } from "../../theme"

const {horizontalScale, verticalScale, fontScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    innerScreen: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(15),
    },
    favoritesContainer: {
        marginVertical: verticalScale(20),
        borderRadius: horizontalScale(20),
        overflow: 'hidden',
        // borderWidth: 10,
    },
    descriptionContainer: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(15),
    },
    description: {
        gap: 5
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
    noFavoritesContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
    },
})

export default styles