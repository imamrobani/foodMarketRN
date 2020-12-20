import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessSignUp } from '../../assets'
import { Button, Gap } from '../../components'
import Fonts from '../../const/Fonts'

const SingUpSuccess = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text='Find Foods' onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  )
}

export default SingUpSuccess

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
