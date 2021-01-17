import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import { useForm } from '../../utils'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Colors } from '../../const'

const SignUpAddress = ({ navigation }) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung'
  })

  const registerReducer = useSelector(state => state.registerReducer)

  const onSubmit = () => {
    console.log('form', form)
    const data = {
      ...form,
      ...registerReducer
    }
    console.log('data register: ', data)
    axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log('data success: ', res.data)
        showToast('Registes Success', 'success')
        navigation.replace('SuccessSignUp')
      })
      .catch(err => {
        console.log('error: ', err.response.data.message)
        showToast(err?.response?.data?.message)
      })
  }

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? Colors.topaz : Colors.fadedRed
    });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.page}>
        <Header title='Address' subTitle="Make sure it's valid" onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              label='Phone No.'
              placeholder='Type your phone number'
              value={form.phoneNumber}
              onChangeText={(value) => setForm('phoneNumber', value)}
            />
            <Gap height={16} />
            <TextInput
              label='Address'
              placeholder='Type your address'
              value={form.address}
              onChangeText={(value) => setForm('address', value)}
            />
            <Gap height={16} />
            <TextInput
              label='House No.'
              placeholder='Type your house number'
              value={form.houseNumber}
              onChangeText={(value) => setForm('houseNumber', value)}
            />
            <Gap height={16} />
            <Select
              label='City'
              value={form.city}
              onSelectChange={(value) => setForm('city', value)}
            />
            <Gap height={24} />
            <Button
              text='Sign Up Now'
              onPress={onSubmit}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
