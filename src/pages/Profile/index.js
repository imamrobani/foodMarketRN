import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ProfileDummy } from '../../assets'
import { ProfileTabSection } from '../../components/molecules'
import { Colors, Fonts } from '../../const'
import { getData } from '../../utils'

const Profile = () => {
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res)
    })
  }, [])

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={{ uri: userProfile.profile_photo_url }} style={styles.photoContainer} />
          </View>
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
