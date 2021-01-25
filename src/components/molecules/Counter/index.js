import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcMin, IcPlus } from '../../../assets'
import Fonts from '../../../const/Fonts'

const Counter = ({ onValueChange }) => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    onValueChange(value)
  }, [])

  const onCount = (type) => {
    let result = value
    if (type === 'plus') {
      result = value + 1
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1
      }
    }
    setValue(result)
    onValueChange(result)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <IcPlus />
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#020202',
    marginHorizontal: 10
  }
})
