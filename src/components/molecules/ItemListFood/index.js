import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Number, Rating } from '..'
import { Colors, Fonts } from '../../../const'

const ItemListFood = ({ image, onPress, rating, items, price, type, name, date, status }) => {

  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
          </>
        )
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        )
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
          </>
        )
      case 'past-orders':
        const formateDate = new Date(date).toDateString()
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formateDate}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        )
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
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
  status: (status) => ({
    fontSize: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: status === 'CANCELLED' ? Colors.fadedRed : Colors.topaz
  }),
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: Colors.blueyGrey,
    marginHorizontal: 4
  }
})
