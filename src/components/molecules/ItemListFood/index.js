import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Rating } from '..'
import { Colors, Fonts } from '../../../const'

const ItemListFood = ({ image, onPress, rating, items, price, type, name, date, status }) => {

  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        )
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        )
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items.IDR {price}
              </Text>
            </View>
          </>
        )
      case 'past-orders':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items.IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        )
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        )
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={image}
          style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  )
}

export default ItemListFood

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12
  },
  content: { flex: 1 },
  title: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 16,
    color: Colors.black
  },
  price: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 13,
    color: Colors.blueyGrey
  },
  items: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.blueyGrey
  },
  date: {
    fontSize: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.blueyGrey
  },
  status: {
    fontSize: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.fadedRed
  }
})
