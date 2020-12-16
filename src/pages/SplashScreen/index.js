import React from 'react'
import { View, Text } from 'react-native'
import { Logo } from '../../assets'
import Fonts from '../../const/Fonts'

const SplashScreen = () => {
  return (
    <View style={{
      backgroundColor: '#FFC700',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Logo />
      <View style={{ height: 38 }} />
      <Text style={{ fontSize: 32, color: '#020202', fontFamily: Fonts.POPPINS_MEDIUM }}>FoodMarket</Text>
    </View>
  )
}

export default SplashScreen