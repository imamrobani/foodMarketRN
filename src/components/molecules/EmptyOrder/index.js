import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlEmptyOrder } from '../../../assets'
import { Button, Gap } from '../../atoms'
import { Colors, Fonts } from '../../../const'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text='Find Foods' onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  )
}

export default EmptyOrder

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.black
  },
  subTitle: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.blueyGrey
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80
  }
})
