import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../assets'
import { FoodCard, HomeProfile, HomeTabSection } from '../../components'
import { getFoodData } from '../../redux/action'

const Home = () => {
  const dispatch = useDispatch()
  const { food } = useSelector(state => state.homeReducer)

  useEffect(() => {
    dispatch(getFoodData())
  }, [])

  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              {/* <Gap widht={24} /> */}
              {food.map((itemFood) => {
                return <FoodCard
                  key={itemFood.id}
                  name={itemFood.name}
                  image={{ uri: itemFood.picturePath }}
                  rating={itemFood.rate}
                />
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: { flex: 1 },

  foodContainer: { flexDirection: 'row', marginVertical: 24, marginLeft: 24 },
  tabContainer: { flex: 1 }
})
