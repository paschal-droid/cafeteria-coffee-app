import { StyleSheet } from "react-native"
import { Scaling, Themes, FontWeight } from "../../theme"

const {fontScale, verticalScale, horizontalScale} = Scaling;
const {COLOR} = Themes

const styles = StyleSheet.create({
    innerScreen: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(15)
    },
    cartContainer: {
       flex: 1,
    },
})

export default styles