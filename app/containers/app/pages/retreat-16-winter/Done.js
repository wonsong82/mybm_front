import { connect } from 'react-redux'

import Done from '../../../../components/app/pages/retreat-16-winter/Done'


const mapStateToProps = (state) => {
  let sir = state.retreat16winter.gender == '남' ? ' 형제님':' 자매님'

  return {
    name: state.retreat16winter.name +  sir
  }
}

const mapDispatchToProps = () => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Done)