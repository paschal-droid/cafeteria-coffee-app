import { StyleSheet } from "react-native"
import { Scaling, Themes, FontWeight } from "../../theme"

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    innerScreen: {
        flex: 1,
        marginHorizontal: horizontalScale(15)

    },
    orderContainer: {
        flex: 1
    },
    downloadButton: {
        width: '100%',
    },
    orderHistoryContainer: {
        marginHorizontal: horizontalScale(5),
    },
    lottieStyles: {
        flex: 1
    },
})

export default styles