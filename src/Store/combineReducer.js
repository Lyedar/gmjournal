import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//Reducer imports
import dice from '../dice/reducer.js'


export default combineReducers({
  routing : routerReducer,
  dice
})
