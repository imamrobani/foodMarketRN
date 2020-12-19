import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen, SignIn } from '../pages'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router