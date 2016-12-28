import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'


import { soon16_setIsValid } from '../actions/'
export const soon16_validate = () => (dispatch, getState) => {
  const { name, age, gender, address, register, needRide, canRide } = getState().soon16

  if(name && age && gender && address && register && needRide ){
    if( needRide === '0' ){
      if( canRide ){
        dispatch(soon16_setIsValid(true))
      }
      else {
        dispatch(soon16_setIsValid(false))
      }
    }
    else {
      dispatch(soon16_setIsValid(true))
    }
  }

  else {
    dispatch(soon16_setIsValid(false))
  }
}

import { soon16_submitSent, soon16_submitReceived } from '../actions/'
export const soon16_submit = () => (dispatch, getState) => {
  const { name, age, gender, address, register, needRide, canRide } = getState().soon16
  dispatch(soon16_submitSent())
  $.ajax({
    url: '/api/soon-16/request',
    cache: false,
    method: 'post',
    data: {
      name, age, gender, address, register, needRide, canRide
    },
    success: (e) => {
      if( e=='ok' ){
        dispatch(soon16_submitReceived())
        browserHistory.push('/soon-16/done')
      }
      else {
        console.log(e)
      }
    }
  })
}


import { retreat16winter_setIsValid } from '../actions/'
export const retreat16winter_validate = () => (dispatch, getState) => {
  const { name, age, gender, phone, size, needRide, canRide } = getState().retreat16winter

  if( name && age && gender && phone && size && needRide ){
    if( needRide === '0' ){
      if( canRide ){
        dispatch( retreat16winter_setIsValid(true) )
      } else {
        dispatch( retreat16winter_setIsValid(false) )
      }
    }
    else {
      dispatch( retreat16winter_setIsValid(true) )
    }
  }

  else {
    dispatch( retreat16winter_setIsValid(false) )
  }
}

import { retreat16winter_submitSent, retreat16winter_submitReceived } from '../actions/'
export const retreat16winter_submit = () => (dispatch, getState) => {
  const { name, age, gender, phone, size, needRide, canRide } = getState().retreat16winter
  dispatch( retreat16winter_submitSent() )
  $.ajax({
    url: '/api/retreat-16-winter/apply',
    cache: false,
    method: 'post',
    data: {
      name, age, gender, phone, size, needRide, canRide
    },
    success: e => {
      console.log(e);
      if( e=='ok' ){
        dispatch( retreat16winter_submitReceived() )
        browserHistory.push('/retreat-16-winter/done')
      }
      else {
        console.log(e)
      }
    }
  })
}
