import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import { Cart, Detail, Favorite, Home, Order, Payment } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Scaling, Themes } from "../theme";
import { BlurView } from "@react-native-community/blur";
import { TabTitle, CustomIcon } from "../components";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen options={screenOptions} name={Routes.Tab} component={TabNavigation} />
      <Stack.Screen options={screenOptions} name={Routes.Details} component={Detail} />
      <Stack.Screen options={screenOptions} name={Routes.Payment} component={Payment} />
    </Stack.Navigator>
  )
}

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={Scaling.fontScale(30)}
              color={
                focused
                  ? Themes.COLOR.primaryPinkHex
                  : Themes.COLOR.primaryLightBrownHex
              }
              style={{marginBottom: Scaling.fontScale(-25)}}
            />
          ),tabBarLabel: ({focused}) => (<TabTitle isFocused={focused} title={'Home'}/>),
        }}
        name={Routes.Home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="cart"
              size={Scaling.fontScale(30)}
              style={{marginBottom: Scaling.fontScale(-25)}}
              color={
                focused
                  ? Themes.COLOR.primaryPinkHex
                  : Themes.COLOR.primaryLightBrownHex
              }
            />
          ),tabBarLabel: ({focused}) => (<TabTitle isFocused={focused} title={'Cart'} />)
        }}
        name={Routes.Cart}
        component={Cart}
      />
      <Tab.Screen
              
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="like"
              size={Scaling.fontScale(30)}
              style={{marginBottom: Scaling.fontScale(-25)}}
              color={
                focused
                  ? Themes.COLOR.primaryPinkHex
                  : Themes.COLOR.primaryLightBrownHex
              }
            />
          ),tabBarLabel: ({focused}) => (<TabTitle isFocused={focused} title={'Favorites'} />)
        }}
        name={Routes.Favorite}
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="bell"
              size={Scaling.fontScale(30)}
              style={{marginBottom: Scaling.fontScale(-25)}}

              color={
                focused
                  ? Themes.COLOR.primaryPinkHex
                  : Themes.COLOR.primaryLightBrownHex
              }
            />
          ),tabBarLabel: ({focused}) => (<TabTitle isFocused={focused} title={'Order'} />)
        }}
        name={Routes.Order}
        component={Order}
      />
    </Tab.Navigator>
  );
};


// tabBarIcon: ({focused, color, size} => (
//     <Icons type={'feather'} name='home' size={25} color={focused?Themes.COLOR.primaryPinkHex : Themes.COLOR.secondaryBrownHex} />
// ))


const options = {
    header: ()=> null,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
}

const screenOptions = {
    animation: 'slide_from_bottom'

}
const styles = StyleSheet.create({
        tabBarStyle: {
        height: Scaling.verticalScale(80),
        position: 'absolute',
        backgroundColor: Themes.COLOR.primaryBrownRGBA,
        borderTopWidth: 0,
        elevation: 0,        
    },
    blurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
})

const tabBarOptions = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarHideOnKeyboard: true,
    tabBarStyle: styles.tabBarStyle,
    labelStyle: {
      paddingVertical: 0, // Adjust the padding as needed
    },
    tabBarBackground: ()=> (<BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyles} />)
}
