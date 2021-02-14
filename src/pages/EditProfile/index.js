import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import Fonts from '../../const/Fonts'
import { useDispatch } from 'react-redux'
import { getData, showMessage, storeData, useForm } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios'
import { API_HOST } from '../../config'

const EditProfile = ({ navigation }) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: ''
  })

  const onSubmit = () => {
    let resultObj = {}
    Object.keys(form).map(obj => {
      if (form[obj]) {
        resultObj[obj] = form[obj]
      }
    })
    getData('token').then(resToken => {
      axios.post(`${API_HOST.url}/user`, resultObj, {
        headers: {
          'Authorization': resToken.value
        }
      }).then((res) => {
        showMessage('Update Success', 'success')
        storeData('userProfile', res.data.data).then(() => {
          navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
        })
      }).catch((err) => {
        showMessage(
          `${err?.response?.data?.message} on Update profile API` || 'Terjadi kesalahan di API update profile'
        )
      })
    })
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.page}>
        <Header title='Edit Profile' subTitle='Edit your profile' onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <TextInput
            label='Full name'
            placeholder='Type your full name'
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Email address'
            placeholder='Type your email address'
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Address'
            placeholder='Type your address'
            value={form.password}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label='House Number'
            placeholder='Type your house number'
            value={form.password}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Phone Number'
            placeholder='Type your phone number'
            value={form.password}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <Select
            label='City'
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text='Update' onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: '#8D92A3',
    textAlign: 'center'
  }
})
