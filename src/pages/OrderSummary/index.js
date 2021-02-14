import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { Button, Gap, Header, ItemListFood, ItemValue, Loading } from '../../components'
import { API_HOST } from '../../config'
import { Colors, Fonts } from '../../const'
import { getData, showMessage } from '../../utils'

const OrederSummary = ({ navigation, route }) => {
  const { item, transaction, userProfile } = route.params
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [paymentURL, setPaymentURL] = useState('https://google.com')

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING'
    }
    getData('token').then(resToken => {
      axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          'Authorization': resToken.value
        }
      })
        .then(res => {
          setIsPaymentOpen(true)
          setPaymentURL(res.data.data.payment_url)
        })
        .catch(err => {
          showMessage(err?.response?.message || 'Tejadi Kesalahan')
        })

    })
  }

  const onNavChange = (state) => {
    const titleWeb = 'Laravel'
    if (state.title === titleWeb) {
      navigation.reset({ index: 0, routes: [{ name: 'SuccessOrder' }] })

    }
  }

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title='Payment'
          subTitle='You derserve better meal'
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{ uri: paymentURL }}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    )
  }
  return (
    <ScrollView>
      <Header title='Payment' subTitle='You deserve better meal' onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type='order-summary'
          name={item.name}
          price={item.price}
          image={{ uri: item.picturePath }}
          items={transaction.totalItem} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label={item.name} value={transaction.totalPrice} type='currency' />
        <ItemValue label='Driver' value={transaction.driver} type='currency' />
        <ItemValue label='Tax 10%' value={transaction.tax} type='currency' />
        <ItemValue label='Total Price' value={transaction.total} color={Colors.topaz} type='currency' />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivery to:</Text>
        <ItemValue label='Name' value={userProfile.name} />
        <ItemValue label='Phone No.' value={userProfile.phoneNumber} />
        <ItemValue label='Address' value={userProfile.address} />
        <ItemValue label='House No.' value={userProfile.houseNumber} />
        <ItemValue label='City' value={userProfile.city} />
      </View>
      <Gap height={40} />
      <View style={styles.button}>
        <Button text='Checkout Now' onPress={onCheckout} />
      </View>
    </ScrollView>
  )
}

export default OrederSummary

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
