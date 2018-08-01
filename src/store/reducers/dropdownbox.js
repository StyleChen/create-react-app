import actionTypes from '../actionTypes'

export default function dropdownbox (state = {}, action) {
  switch (action.type) {
    case actionTypes.DROPDOWNBOX:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}