const Middlewares = require('../middlewares/')

// 2016 순신청
export const soon16_validate = Middlewares.soon16_validate
export const soon16_setName = name => ({ type: 'soon16_set_name', name })
export const soon16_setAge = age => ({ type: 'soon16_set_age', age })
export const soon16_setGender = gender => ({ type: 'soon16_set_gender', gender })
export const soon16_setAddress = address => ({ type: 'soon16_set_address', address })
export const soon16_setRegister = register => ({ type: 'soon16_set_register', register })
export const soon16_setNeedRide = needRide => ({ type: 'soon16_set_needRide', needRide })
export const soon16_setCanRide = canRide => ({ type: 'soon16_set_canRide', canRide })
export const soon16_setIsValid = isValid => ({ type: 'soon16_set_isValid', isValid })

export const soon16_submitSent = () => ({ type: 'soon16_submit_sent' })
export const soon16_submitReceived = ( data ) => ({ type: 'soon16_submit_received' })
export const soon16_submit = Middlewares.soon16_submit

// 2016 겨울 수련회
export const retreat16winter_setIsValid = isValid => ({ type: 'retreat16winter_setIsValid', isValid })
export const retreat16winter_setName = name => ({ type: 'retreat16winter_setName', name })
export const retreat16winter_setAge = age => ({ type: 'retreat16winter_setAge', age })
export const retreat16winter_setGender = gender => ({ type: 'retreat16winter_setGender', gender })
export const retreat16winter_setPhone = phone => ({ type: 'retreat16winter_setPhone', phone })
export const retreat16winter_setSize = size => ({ type: 'retreat16winter_setSize', size })
export const retreat16winter_setNeedRide = needRide => ({ type: 'retreat16winter_setNeedRide', needRide })
export const retreat16winter_setCanRide = canRide => ({ type: 'retreat16winter_setCanRide', canRide })
export const retreat16winter_validate = Middlewares.retreat16winter_validate

export const retreat16winter_submitSent = () => ({ type: 'retreat16winter_submitSent' })
export const retreat16winter_submitReceived = data => ({ type: 'retreat16winter_submitReceived' })
export const retreat16winter_submit = Middlewares.retreat16winter_submit



