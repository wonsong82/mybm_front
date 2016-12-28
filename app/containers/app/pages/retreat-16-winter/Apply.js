import { connect } from 'react-redux'

import { retreat16winter_validate, retreat16winter_setName, retreat16winter_setAge, retreat16winter_setGender, retreat16winter_setPhone, retreat16winter_setSize, retreat16winter_setNeedRide, retreat16winter_setCanRide, retreat16winter_submit } from '../../../../actions/'

import Apply from '../../../../components/app/pages/retreat-16-winter/Apply'


const mapStateToProps = state => {
  return { ...state.retreat16winter }
}

const mapDispatchToProps = dispatch => {
  return {
    onNameChange:     name      => { dispatch( retreat16winter_setName(name) );         dispatch( retreat16winter_validate() )},
    onAgeChange:      age       => { dispatch( retreat16winter_setAge(age) );           dispatch( retreat16winter_validate() )},
    onGenderClick:    gender    => { dispatch( retreat16winter_setGender(gender) );     dispatch( retreat16winter_validate() )},
    onPhoneChange:    phone     => { dispatch( retreat16winter_setPhone(phone) );       dispatch( retreat16winter_validate() )},
    onSizeClick:      size      => { dispatch( retreat16winter_setSize(size) );         dispatch( retreat16winter_validate() )},
    onNeedRideClick:  needRide  => { dispatch( retreat16winter_setNeedRide(needRide) ); dispatch( retreat16winter_validate() )},
    onCanRideClick:   canRide   => { dispatch( retreat16winter_setCanRide(canRide) );   dispatch( retreat16winter_validate() )},
    onNextClick: () => { dispatch( retreat16winter_submit() )}
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Apply)