import { connect } from 'react-redux'

import Done from '../../../../components/app/pages/soon-16/Done'


const mapStateToProps = (state) => {
  let sir = state.soon16.gender == '남' ? ' 형제님':' 자매님'

  return {
    name: state.soon16.name +  sir
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Done)