import { Scaling, Themes } from "../../theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    screen: {
      flex: 1,
      backgroundColor: Themes.COLOR.primaryBrownHex,      
    },
    app: {
      marginTop: Scaling.verticalScale(5),
      marginHorizontal: Scaling.horizontalScale(20)
  },
})

export default styles