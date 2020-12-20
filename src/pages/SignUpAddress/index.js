import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import Fonts from '../../const/Fonts'

const SignUpAddress = () => {
  return (
    <View style={styles.page}>
      <Header title='Address' subTitle="Make sure it's valid" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput label='Phone No.' placeholder='Type your phone number' />
          <Gap height={16} />
          <TextInput label='Address' placeholder='Type your address' />
          <Gap height={16} />
          <TextInput label='House No.' placeholder='Type your house number' />
          <Gap height={16} />
          <TextInput label='Password' placeholder='Type your password' />
          <Gap height={16} />
          <Select />
          <Gap height={24} />
          <Button text='Sign Up Now' />
        </ScrollView>
      </View>
    </View>
  )
}

export default SignUpAddress

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  },
})
