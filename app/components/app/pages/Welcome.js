require('./Welcome.scss')
import React from 'react'
import RouterLink from '../../../components/lib/link/RouterLink'


const Welcome = () => (
    <div className="Welcome">

      <div className="button-con">
        <RouterLink className="startBtn" to="/skitrip-1702/apply">2017년 2월 스키트립 신청</RouterLink>
      </div>

      <div className="button-con">
        <RouterLink className="startBtn" to="/retreat-16-winter/apply">2016 겨울 수련회 신청</RouterLink>
      </div>

      <div className="button-con">
        <RouterLink className="startBtn" to="/soon-16/register">2016 순 신청</RouterLink>
      </div>

    </div>
)


export default Welcome

