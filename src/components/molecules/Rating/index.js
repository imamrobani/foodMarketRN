import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio'
import { Number } from '..'
import { IcStarOff, IcStarOn } from '../../../assets'

const Rating = ({ number }) => {
  const renderStar = () => {
    let star = []
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn key={i} />)
      } else {
        star.push(<IcStarOff key={i} />)
      }
    }
    return star
  }
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {renderStar()}
      </View>
      <Number number={number} type='decimal' />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  starContainer: { flexDirection: 'row', marginRight: 4 }
})
