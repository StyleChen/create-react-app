import actionTypes from '../actionTypes'
const setUser = (val) => {
  return {
    type: actionTypes.USER,
    payload: val
  }
}

const setUserName = val => ({
  type: 'USERNAME',
  payload: val
})

const setUserId = val => ({
  type: 'USERID',
  payload: val
})

const setUserType = val => ({
  type: 'USERTYPE',
  payload: val
})

export default { setUser, setUserName, setUserId, setUserType }