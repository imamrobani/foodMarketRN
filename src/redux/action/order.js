import axios from "axios"
import { API_HOST } from "../../config"
import { getData } from "../../utils"

export const getOrders = () => (dispatch) => {
  getData('token').then(resToken => {
    axios.get(`${API_HOST.url}/transaction`, {
      headers: {
        'Authorization': resToken.value
      }
    })
      .then(res => {
        console.log('get orders: ', res)
        dispatch({ type: 'SET_ORDERS', value: res.data.data.data })
      })
      .catch(err => {
        console.log('err get orders', err)
      })
  })
}

//16258873318

export const getInProgress = () => (dispatch) => {
  getData('token').then(resToken => {
    axios.all([
      axios.get(`${API_HOST.url}/transaction?status=PENDING&limit=100`, {
        headers: {
          'Authorization': resToken.value
        }
      }),
      axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
        headers: {
          'Authorization': resToken.value
        }
      }),
      axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
        headers: {
          'Authorization': resToken.value
        }
      })
    ])
      .then(axios.spread((res1, res2, res3) => {
        const pending = res1.data.data.data
        const success = res2.data.data.data
        const onDelivery = res3.data.data.data
        dispatch({
          type: 'SET_IN_PROGRESS',
          value: [...pending, ...success, ...onDelivery]
        })
      }))
      .catch(err => {
        console.log('err in progress', err)
      })
  })
}

export const getPastOrders = () => (dispatch) => {
  getData('token').then(resToken => {
    axios.all([
      axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
        headers: {
          'Authorization': resToken.value
        }
      }),
      axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
        headers: {
          'Authorization': resToken.value
        }
      })
    ])
      .then(axios.spread((res1, res2) => {
        console.log('get past order: ', res1.data.data.data)
        const cancelled = res1.data.data.data
        const delivered = res2.data.data.data
        dispatch({
          type: 'SET_PAST_ORDERS',
          value: [...cancelled, ...delivered]
        })
      }))
      .catch(err => {
        console.log('err pasr order', err)
      })
  })
}
