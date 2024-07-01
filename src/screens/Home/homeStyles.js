import { StyleSheet } from "react-native"
import { FontWeight, Scaling, Themes } from "../../theme"

const styles = StyleSheet.create({
    categories: {
        paddingTop: Scaling.verticalScale(8),
        marginLeft: Scaling.horizontalScale(15)
    },
    beans: {
        paddingVertical: Scaling.verticalScale(12),
    },
    coffeeContainer: {
        paddingTop: Scaling.verticalScale(12)
    },
    coffeeBeansContainer:  {
        paddingTop: Scaling.verticalScale(8),
        marginLeft: Scaling.horizontalScale(15)
    },
    beanTitleText: {
        fontFamily: FontWeight('Poppins', '600'),
        fontSize: Scaling.fontScale(20),
        color: Themes.COLOR.primaryLightWhiteHex
    }
    
})

export default styles