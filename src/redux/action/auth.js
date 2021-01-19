import axios from 'axios'
import { showMessage } from '../../utils'
import { setLoading } from './global'

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api'
}

export const singUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
  axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
      console.log('data success', res.data)
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData()
        photoForUpload.append('file', photoReducer)

        axios.post(`${API_HOST.url}/user/photo`,
          photoForUpload,
          {
            headers: {
              'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(resUpload => {
            console.log('succes upload: ', resUpload)
          })
          .catch(err => {
            showMessage('Upload Photo tidak berhasil')
          })
      }
      dispatch(setLoading(false))
      showMessage('Registes Success', 'success')
      navigation.replace('SuccessSignUp')
    })
    .catch(err => {
      console.log('err', err.response)
      dispatch(setLoading(false))
      showMessage(err?.response?.data?.message)
    })
}