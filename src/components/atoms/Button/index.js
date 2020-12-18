import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fonts from '../../../const/Fonts'

const Button = ({ text, color = '#FFC700', textColor = '#020202' }) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8
  }),
  text: (color) => ({
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: color,
    textAlign: 'center'
  })
})
