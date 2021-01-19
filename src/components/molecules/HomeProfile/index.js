import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../../assets'
import Fonts from '../../../const/Fonts'
import { getData } from '../../../utils'

const HomeProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy)

  useEffect(() => {
    getData('userProfile').then((res) => {
      console.log('user Profile: ', res)
      setPhoto({ uri: res.profile_photo_url })
    })
  }, [])
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white'
  },
  appName: { fontSize: 22, fontFamily: Fonts.POPPINS_MEDIUM, color: '#020202' },
  desc: { fontFamily: Fonts.POPPINS_LIGHT, color: '#8D92A3' },
  profile: { width: 50, height: 50, borderRadius: 8 },
})
