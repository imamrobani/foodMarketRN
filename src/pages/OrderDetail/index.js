import axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components'
import { API_HOST } from '../../config'
import { Colors, Fonts } from '../../const'
import { getData, showMessage } from '../../utils'

const OrderDetail = ({ route, navigation }) => {
  const order = route.params

  const onCancel = () => {
    const data = {
      status: 'CANCELLED'
    }
    getData('token').then(resToken => {
      axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
        headers: {
          'Authorization': resToken.value
        }
      })
        .then((res) => {
          navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
        })
        .catch((err) => {
          showMessage(err?.response?.message || 'Tejadi Kesalahan')
        })

    })
  }
  return (
    <ScrollView>
      <Header
        title='Payment'
        subTitle='You deserve better meal'
        onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type='order-summary'
          name={order.food.name}
          price={order.food.price}
          items={order.quantity}
          image={{ uri: order.food.picturePath }} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={order.food.price * order.quantity}
          type='currency'
        />
        <ItemValue label='Driver' value={50000} type='currency' />
        <ItemValue label='Tax 10%' value={10 / 100 * order.total} type='currency' />
        <ItemValue label='Total Price' value={order.total} color={Colors.topaz} type='currency' />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivery to:</Text>
        <ItemValue label='Name' value={order.user.name} />
        <ItemValue label='Phone No.' value={order.user.phoneNumber} />
        <ItemValue label='Address' value={order.user.address} />
        <ItemValue label='House No.' value={order.user.houseNumber} />
        <ItemValue label='City' value={order.user.city} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivery to:</Text>
        <ItemValue
          label={`#${order.id}`}
          value={order.status}
          color={order.status === 'CANCELLED' ? Colors.fadedRed : Colors.topaz} />
      </View>
      {order.status === 'PENDING' && <View style={styles.button}>
        <Button
          text='Cancel My Order'
          onPress={onCancel}
          color={Colors.fadedRed}
          textColor='white'
        />
      </View>}
      <Gap height={40} />
    </ScrollView>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24
  },
  label: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.black,
    marginBottom: 8
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24
  }
})
