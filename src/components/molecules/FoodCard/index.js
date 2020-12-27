import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FoodDummy1, IcStarOff, IcStarOn } from '../../../assets'
import Fonts from '../../../const/Fonts'

const FoodCard = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text>Cherry Healty</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24
  },
  image: { width: 200, height: 140, resizeMode: 'cover' },
  content: { padding: 12 },
  text: { fontSize: 16, fontFamily: Fonts.POPPINS_REGULAR, color: '#020202' },
  ratingContainer: { flexDirection: 'row' },
  starContainer: { flexDirection: 'row' }
})