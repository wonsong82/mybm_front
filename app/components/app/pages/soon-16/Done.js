require('./Done.scss')
import React from 'react'


const Done = ({ name }) => (
    <div className="Done">

      <h3>순 신청이 접수 되었습니다</h3>
      <p><span>{name}</span>, 새순과 함께할 은혜롭고 즐거운 신앙생활 기대합니다</p>

      <span>"우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에게 대한 자기의 사랑을 확증하셨느니라" [롬5:8]</span>

    </div>
)


export default Done

