import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-community/picker'
import Fonts from '../../../const/Fonts'

const Select = ({ label, value, onSelectChange }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
        >
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Jogja" value="Jogja" />
          <Picker.Item label="Surabaya" value="Surabaya" />
        </Picker>
      </View>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: "#020202"
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2
  }
})
