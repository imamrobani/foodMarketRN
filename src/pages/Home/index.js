import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { FoodDummy1, ProfileDummy, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../assets'
import { FoodCard, Gap, HomeTabSection } from '../../components'
import Fonts from '../../const/Fonts'

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            {/* <Gap widht={24} /> */}
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy4} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: { flex: 1 },
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
  foodContainer: { flexDirection: 'row', marginVertical: 24, marginLeft: 24 },
  tabContainer: { flex: 1 }
})
