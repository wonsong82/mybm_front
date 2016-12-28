import { connect } from 'react-redux'

import { soon16_validate, soon16_setName, soon16_setAge, soon16_setGender, soon16_setAddress, soon16_setRegister, soon16_setNeedRide, soon16_setCanRide, soon16_submit } from '../../../../actions/'
import Register from '../../../../components/app/pages/soon-16/Register'


const mapStateToProps = (state) => {
  return { ...state.soon16 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: name => {dispatch(soon16_setName(name)); dispatch(soon16_validate())},
    onAgeChange: age => {dispatch(soon16_setAge(age)); dispatch(soon16_validate())},
    onGenderClick: gender => {dispatch(soon16_setGender(gender)); dispatch(soon16_validate())},
    onAddressChange: address => {dispatch(soon16_setAddress(address)); dispatch(soon16_validate())},
    onRegisterClick: register => {dispatch(soon16_setRegister(register)); dispatch(soon16_validate())},
    onNeedRideClick: needRide => {dispatch(soon16_setNeedRide(needRide)); dispatch(soon16_validate())},
    onCanRideClick: canRide => {dispatch(soon16_setCanRide(canRide)); dispatch(soon16_validate())},
    onNextClick: () => {dispatch(soon16_submit())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)