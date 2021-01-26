import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Number } from '..'
import { Colors, Fonts } from '../../../const'

const ItemValue = ({ label, value, color = Colors.black, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(color)} />
      ) : (
          <Text style={styles.value(color)}>{value}</Text>
        )}
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.blueyGrey
  },
  value: (color) => ({
    fontFamily: Fonts.POPPINS_REGULAR,
    color: color
  })
})
