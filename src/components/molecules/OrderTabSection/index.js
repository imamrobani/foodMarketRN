import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, RefreshControl } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ItemListFood } from '..';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import Fonts from '../../../const/Fonts'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '15%', marginLeft: '3%' }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1
    }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{
        fontFamily: Fonts.POPPINS_REGULAR,
        color: focused ? '#020202' : '#8D92A3'
      }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { inProgress } = useSelector(state => state.orderReducer)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(getInProgress())
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(getInProgress())
    setRefreshing(false)
  }

  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {inProgress.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              rating={3}
              image={{ uri: order.food.picturePath }}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type='in-progress'
              items={order.quantity}
              price={order.total}
              name={order.food.name}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const PastOrders = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { pastOrders } = useSelector(state => state.orderReducer)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(getPastOrders())
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(getPastOrders())
    setRefreshing(false)
  }

  return (
    <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {pastOrders.map((order) => {
          return (
            <ItemListFood
              key={order.id}
              rating={3}
              image={{ uri: order.food.picturePath }}
              onPress={() => navigation.navigate('OrderDetail', order)}
              type='past-orders'
              items={order.quantity}
              price={order.total}
              name={order.food.name}
              date={order.created_at}
              status={order.status}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const initialLayout = { width: Dimensions.get('window').width }

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'In Progress' },
    { key: '2', title: 'Past Orders' }
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ backgroundColor: 'white' }}
    />
  )
}

export default OrderTabSection

const styles = StyleSheet.create({})
