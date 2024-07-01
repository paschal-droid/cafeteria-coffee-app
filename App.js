import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigation/mainNavigation'
import BootSplash from "react-native-bootsplash";

const App = () => {
  return (
    <NavigationContainer onReady={() => {
      BootSplash.hide();
    }}>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App