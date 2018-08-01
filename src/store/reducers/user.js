import actionTypes from '../actionTypes'

export default function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.USER: 
      return state.user = action.payload
    default:
      return state
  }
}