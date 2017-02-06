import { connect } from 'react-redux'

import { skitrip1702_validate, skitrip1702_setName, skitrip1702_setCity, skitrip1702_setWhichRide, skitrip1702_setHaveEquipment, skitrip1702_setNeedTicket, skitrip1702_setJoinDinner, skitrip1702_setNeedRide, skitrip1702_setCanRide, skitrip1702_submit } from '../../../../actions/'

import Apply from '../../../../components/app/pages/skitrip-1702/Apply'


const mapStateToProps = state => {
  return { ...state.skitrip1702 }
}

const mapDispatchToProps = dispatch => {
  return {
    onNameChange:             val      => { dispatch( skitrip1702_setName(val) );           dispatch( skitrip1702_validate() )},
    onCityChange:             val      => { dispatch( skitrip1702_setCity(val) );           dispatch( skitrip1702_validate() )},
    onWhichRideChange:        val      => { dispatch( skitrip1702_setWhichRide(val) );      dispatch( skitrip1702_validate() )},
    onHaveEquipmentChange:    val      => { dispatch( skitrip1702_setHaveEquipment(val) );  dispatch( skitrip1702_validate() )},
    onNeedTicketChange:       val      => { dispatch( skitrip1702_setNeedTicket(val) );     dispatch( skitrip1702_validate() )},
    onJoinDinnerChange:       val      => { dispatch( skitrip1702_setJoinDinner(val) );     dispatch( skitrip1702_validate() )},
    onNeedRideClick:          val      => { dispatch( skitrip1702_setNeedRide(val) );       dispatch( skitrip1702_validate() )},
    onCanRideClick:           val      => { dispatch( skitrip1702_setCanRide(val) );        dispatch( skitrip1702_validate() )},
    onNextClick:              ()       => { dispatch( skitrip1702_submit() )}
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Apply)