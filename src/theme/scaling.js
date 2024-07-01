import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width, height} = Dimensions.get('window');

//! THIS HELPS TO CHECK IF THE DEVICE HAS A SMALL WIDTH AND A NOTCH AT THE TOP OF THE SCREEN
const isSmall = width <= 375 && !DeviceInfo.hasNotch()

//* THIS HELPER FUNCTIONS HELPS SET ARBITARY NUMBERS FOR OUR MOBILE SCREEN WIDTH AND HEIGHT
//* FOR WHEN WE NEED TO CREATE STYLES FOR DIFFERENT SCREEN, THINK OF IT AS A CSS MEDIA SCREEN
//* QUERY BUT FOR MOBILE SCREEN IN REACT NATIVE


const guidelineBaseWidth = () => {
    if(isSmall) {
        return 330
    }

    return 350
}

const horizontalScale = (size) => (width/guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
    if(isSmall) {
        return 550
    } else if(width > 410) return 620

    return 680
}


const verticalScale = (size) => (height / guidelineBaseHeight()) * size

const guidelineBaseFonts = () => {
    if (width > 410) {
        return 430;
    }
    return 400
}

const fontScale = (size) => Math.round((width /guidelineBaseFonts()) * size)


export default Scaling = {horizontalScale, verticalScale, fontScale}