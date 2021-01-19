import { combineReducers } from 'redux'
import { registerReducer, photoReducer } from './auth'
import { globalReducer } from './global'

const reducer = combineReducers({ registerReducer, photoReducer, globalReducer })

export default reducer