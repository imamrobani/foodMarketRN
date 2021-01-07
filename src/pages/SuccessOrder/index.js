import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccesOrder } from '../../assets'
import { Button, Gap } from '../../components'
import { Colors } from '../../const'
import Fonts from '../../const/Fonts'

const SuccessOrder = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IlSuccesOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text='Order Other Foods'
          onPress={() => navigation.replace('MainApp')} />
      </View>
      <Gap height={16} />
      <View style={styles.buttonContainer}>
        <Button
          text='View My Order'
          onPress={() => navigation.replace('MainApp', { screen: 'Order' })}
          color={Colors.blueyGrey}
          textColor='white'
        />
      </View>
    </View>
  )
}

export default SuccessOrder

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: '#020202'
  },
  subTitle: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: '#8D92A3'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80
  }
})
