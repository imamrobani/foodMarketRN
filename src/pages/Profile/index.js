import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { ProfileTabSection } from '../../components/molecules'
import { API_HOST } from '../../config'
import { Colors, Fonts } from '../../const'
import { getData, showMessage, storeData } from '../../utils'
import axios from 'axios'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    updateUserProfile()
  }, [])

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res)
    })
  }

  const updatePhoto = () => {
    launchImageLibrary({
      quality: 0.7,
      maxWidth: 200,
      maxHeight: 200
    },
      (response) => {
        if (response.didCancel || response.errorCode) {
          showMessage('Anda tidak memilih foto')
        } else {
          const source = { uri: response.uri }
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName
          }

          const photoForUpload = new FormData()
          photoForUpload.append('file', dataImage)

          getData('token').then(resToken => {
            axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                'Authorization': resToken.value,
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(res => {
                getData('userProfile').then(resUser => {
                  showMessage('Update photo berhasil', 'success')
                  resUser.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${res.data.data[0]}`
                  storeData('userProfile', resUser).then(() => {
                    updateUserProfile()
                  })
                })
              })
              .catch(err => {
                showMessage(err?.response?.message || 'Terjadi Kesalahan')
              })
          })
        }
      })
  }

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <TouchableOpacity onPress={updatePhoto} >
            <View style={styles.borderPhoto}>
              <Image source={{ uri: userProfile.profile_photo_url }} style={styles.photoContainer} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { flex: 1, marginTop: 24 },
  profileDetail: { backgroundColor: 'white', paddingBottom: 26 },
  name: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.black,
    textAlign: 'center'
  },
  email: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.blueyGrey,
    textAlign: 'center'
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
    padding: 24
  }
})
