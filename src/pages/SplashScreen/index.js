import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Logo } from '../../assets'
import Fonts from '../../const/Fonts'
import { getData } from '../../utils'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
        } else {
          navigation.replace('SignIn')
        }
      })
    }, 2000);
  }, [navigation])

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