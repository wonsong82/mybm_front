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

  onCityChange(e){
    this.props.onCityChange(e.target.value)
  }

  onWhichRideClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.whichRide)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onWhichRideChange(target.attr('value'))
  }

  onHaveEquipmentClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.haveEquipment)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onHaveEquipmentChange(target.attr('value'))
  }

  onNeedTicketClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.needTicket)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onNeedTicketChange(target.attr('value'))
  }

  onJoinDinnerClick(e){
    e.preventDefault()
    const target = $(e.target).is('span') ? $(e.target).closest('a') : $(e.target);
    const i = Math.ceil(Math.random() * 3)
    $('.check', $(this.refs.joinDinner)).removeClass('checked1 checked2 checked3')
    $('.check', target).addClass(`checked${i}`)
    this.props.onJoinDinnerChange(target.attr('value'))
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
    const { name, city, isValid } = this.props

    return (
      <div className="Skitrip1702_Apply">

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
            <fieldset className="address-field">
              <label htmlFor="address">사는 City: </label>
              <span className="input-wrapper">
                <input type="text" id="address" value={city} onChange={this.onCityChange.bind(this)} />
            </span>
            </fieldset>
          </div>


          <div className="spacer">* 동그라미로 표시해 주세요 :)</div>

          <div className="row">
            <fieldset className="whichRide-field" ref="whichRide">
              <label htmlFor="whichRide">내가 탈것은: </label>
              <span className="select-wrapper sel-3">
                <a href="#" value="보드" onClick={this.onWhichRideClick.bind(this)}>
                  보드<span className="check" />
                </a>
                <a href="#" value="스키" onClick={this.onWhichRideClick.bind(this)}>
                  스키<span className="check" />
                </a>
                <a href="#" value="튜브" onClick={this.onWhichRideClick.bind(this)}>
                  튜브<span className="check" />
                </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="haveEquipment-field" ref="haveEquipment">
              <label htmlFor="haveEquipment">나는 장비가 있다: </label>
              <span className="select-wrapper">
                <a href="#" value="있다" onClick={this.onHaveEquipmentClick.bind(this)}>
                  있다<span className="check" />
                </a>
                <a href="#" value="없다" onClick={this.onHaveEquipmentClick.bind(this)}>
                  렌탈필요<span className="check" />
                </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="needTicket-field" ref="needTicket">
              <label htmlFor="needTicket">나는 티켓이 필요하다: </label>
              <span className="select-wrapper">
                <a href="#" value="필요" onClick={this.onNeedTicketClick.bind(this)}>
                  YES<span className="check" />
                </a>
                <a href="#" value="불필요" onClick={this.onNeedTicketClick.bind(this)}>
                  NO<span className="check" />
                </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="joinDinner-field" ref="joinDinner">
              <label htmlFor="joinDinner">트립후 같이 저녁식사: </label>
              <span className="select-wrapper">
                <a href="#" value="조인함" onClick={this.onJoinDinnerClick.bind(this)}>
                  조인함<span className="check" />
                </a>
                <a href="#" value="싫음" onClick={this.onJoinDinnerClick.bind(this)}>
                  조인안함<span className="check" />
                </a>
            </span>
            </fieldset>
          </div>

          <div className="row">
            <fieldset className="needRide-field" ref="needRide">
              <label htmlFor="needRide">라이드: </label>
              <span className="select-wrapper">
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
              <span className="select-wrapper">
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