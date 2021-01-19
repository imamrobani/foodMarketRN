import Axios from 'axios'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, TextInput, Button, Gap } from '../../components'
import { useForm } from '../../utils'

const SignIn = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: '',
    password: ''
  })

  const onSubmit = () => {
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        // console.log('success', res)
      })
      .catch(err => {
        // console.log('error', err)
      })
  }

  return (
    <View style={styles.page}>
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
        <TextInput
          label='Email address'
          placeholder='Type your email address'
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label='Password'
          placeholder='Type your password'
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          text='Sign In'
          onPress={() => navigation.replace('MainApp')} />
        <Gap height={12} />
        <Button
          text='Create New Account'
          color='#8D92A3'
          textColor='white'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  }
})
