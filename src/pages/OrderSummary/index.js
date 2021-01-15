import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Header, ItemListFood, ItemValue } from '../../components'
import { Colors, Fonts } from '../../const'

const OrederSummary = ({ navigation }) => {
  return (
    <View>
      <Header title='Payment' subTitle='You deserve better meal' onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type='order-summary'
          name='Sop Bumil'
          price='380.000'
          image={FoodDummy1}
          items={14} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label='Cherry Healthy' value='IDR 18.390.000' />
        <ItemValue label='Driver' value='IDR 50.000' />
        <ItemValue label='Tax 10%' value='IDR 1.800.390' />
        <ItemValue label='Total Price' value='IDR 390.803.000' color={Colors.topaz} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivery to:</Text>
        <ItemValue label='Name' value='Angga Risky' />
        <ItemValue label='Phone No.' value='0822 0819 9688' />
        <ItemValue label='Address' value='Setra Duta Palima' />
        <ItemValue label='House No.' value='A5 Hook' />
        <ItemValue label='City' value='Bandung' />
      </View>
      <View style={styles.button}>
        <Button text='Checkout Now' onPress={() => navigation.replace('SuccessOrder')} />
      </View>
    </View>
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
