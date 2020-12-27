import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcMin, IcPlus } from '../../../assets'
import Fonts from '../../../const/Fonts'

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
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
