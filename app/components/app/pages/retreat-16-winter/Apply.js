require('./Apply.scss')
import React, { Component, PropTypes } from 'react'


class Apply extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading : false
    }
  }


  onNameChange(e){
    this.props.onNameChange(e.target.value)
  }

  onAgeChange(e){
    this.props.onAgeChange(e.target.value)
  }

  onGenderClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.gender)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onGenderClick(target.attr('value'))
  }

  onPhoneChange(e){
    this.props.onPhoneChange(e.target.value)
  }


  onSizeClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.size)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onSizeClick(target.attr('value'))
  }

  onNeedRideClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.needRide)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onNeedRideClick(target.attr('value'))
  }

  onCanRideClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.canRide)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onCanRideClick(target.attr('value'))
  }

  onNextClick(e){
    if(this.state.isLoading) return false
    this.setState({isLoading: true})
    e.preventDefault()
    $('.material-icons', this.refs.nextBtn).css({display: 'none'})
    $('.loading', this.refs.nextBtn).css({display: 'block'})
    $(this.refs.nextBtn).css({cursor: 'default'})
    this.props.onNextClick()
    return false
  }


  render() {
    const { name, age, phone, isValid } = this.props

    return (
      <div className="Retreat16Winter_Apply">

        <div className="form">

          <div className="row">
            <fieldset className="name-field">
              <label htmlFor="name">이름: </label>
              <span className="input-wrapper">
              <input type="text" id="name" value={name} onChange={this.onNameChange.bind(this)} />
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="age-field">
              <label htmlFor="age">나이: </label>
              <span className="input-wrapper">
              <input type="text" id="age" value={age} onChange={this.onAgeChange.bind(this)} />
            </span>
            </fieldset>

            <fieldset className="gender-field" ref="gender">
              <label htmlFor="gender">성별: </label>
              <span className="input-wrapper">
              <a href="#" value="남" onClick={this.onGenderClick.bind(this)}>
                남
                <span className="check" />
              </a>
              <a href="#" value="여" onClick={this.onGenderClick.bind(this)}>
                여
                <span className="check" />
              </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="address-field">
              <label htmlFor="address">전화번호: </label>
              <span className="input-wrapper">
              <input type="text" id="phone" value={phone} onChange={this.onPhoneChange.bind(this)} />
            </span>
            </fieldset>
          </div>



          <div className="spacer">* 동그라미로 표시해 주세요 :)</div>

          <div className="row">
            <fieldset className="size-field" ref="size">
              <label htmlFor="size">후디 사이즈: </label>
              <span className="input-wrapper">
              <a href="#" value={'s'} onClick={this.onSizeClick.bind(this)}>
                S
                <span className="check" />
              </a>
              <a href="#" value={'m'} onClick={this.onSizeClick.bind(this)}>
                M
                <span className="check" />
              </a>
              <a href="#" value={'l'} onClick={this.onSizeClick.bind(this)}>
                L
                <span className="check" />
              </a>
              <a href="#" value={'xl'} onClick={this.onSizeClick.bind(this)}>
                XL
                <span className="check" />
              </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="needRide-field" ref="needRide">
              <label htmlFor="needRide">라이드: </label>
              <span className="input-wrapper">
              <a href="#" value={1} onClick={this.onNeedRideClick.bind(this)}>
                필요하다
                <span className="check" />
              </a>
              <a href="#" value={0} onClick={this.onNeedRideClick.bind(this)}>
                필요없다
                <span className="check" />
              </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="canRide-field" ref="canRide">
              <label htmlFor="canRide">(필요없다면) 라이드를 해줄수: </label>
              <span className="input-wrapper">
              <a href="#" value={1} onClick={this.onCanRideClick.bind(this)}>
                있다
                <span className="check" />
              </a>
              <a href="#" value={0} onClick={this.onCanRideClick.bind(this)}>
                없다
                <span className="check" />
              </a>
            </span>
            </fieldset>
          </div>

        </div>

        <div className="controls">
          { isValid &&
          <a href="#" className="nextBtn" ref="nextBtn" onClick={this.onNextClick.bind(this)}>
            <i className="material-icons icon">assignment</i>
            <i className="material-icons loading">autorenew</i>
            신청서 제출하기
          </a>
          }
        </div>




      </div>
    )
  }

}

Apply.propTypes = {}



export default Apply