import { combineReducers } from 'redux'
import initState from '../initialState'


// Soon 2016 Register
const soon16 = ( state = initState.soon16, action ) => {
  switch(action.type){

    case 'soon16_set_name':
      return { ...state, name: action.name }

    case 'soon16_set_age':
      return { ...state, age: action.age }

    case 'soon16_set_gender':
      return { ...state, gender: action.gender }

    case 'soon16_set_address':
      return { ...state, address: action.address }

    case 'soon16_set_register':
      return { ...state, register: action.register }

    case 'soon16_set_needRide':
      return { ...state, needRide: action.needRide }

    case 'soon16_set_canRide':
      return { ...state, canRide: action.canRide }


    case 'soon16_set_isValid':
      return { ...state, isValid: action.isValid }



    default:
      return state
  }
}

// Retreat 16 Winter Apply
const retreat16winter = ( state = initState.retreat16winter, action ) => {
  switch( action.type ){

    case 'retreat16winter_setName':
      return { ...state, name: action.name }

    case 'retreat16winter_setAge':
      return { ...state, age: action.age }

    case 'retreat16winter_setGender':
      return { ...state, gender: action.gender }

    case 'retreat16winter_setPhone':
      return { ...state, phone: action.phone }

    case 'retreat16winter_setSize':
      return { ...state, size: action.size }

    case 'retreat16winter_setNeedRide':
      return { ...state, needRide: action.needRide }

    case 'retreat16winter_setCanRide':
      return { ...state, canRide: action.canRide }

    case 'retreat16winter_setIsValid':
      return { ...state, isValid: action.isValid }

    default: return state

  }
}


// Retreat 16 Winter Apply
const skitrip1702 = ( state = initState.skitrip1702, action ) => {
  switch( action.type ){

    case 'skitrip1702_setName':
      return { ...state, name: action.name }

    case 'skitrip1702_setCity':
      return { ...state, city: action.city }

    case 'skitrip1702_setWhichRide':
      return { ...state, whichRide: action.ride }

    case 'skitrip1702_setHaveEquipment':
      return { ...state, haveEquipment: action.haveEquipment }

    case 'skitrip1702_setNeedTicket':
      return { ...state, needTicket: action.needTicket }

    case 'skitrip1702_setJoinDinner':
      return { ...state, joinDinner: action.joinDinner }

    case 'skitrip1702_setNeedRide':
      return { ...state, needRide: action.needRide }

    case 'skitrip1702_setCanRide':
      return { ...state, canRide: action.canRide }

    case 'skitrip1702_setIsValid':
      return { ...state, isValid: action.isValid }

    default: return state

  }
}


const appReducer = combineReducers({ soon16, retreat16winter, skitrip1702 })
export default appReducer





