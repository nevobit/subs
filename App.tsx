import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { NavigatorContainer } from './src/navigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigatorContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App