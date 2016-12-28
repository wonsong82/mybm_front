require('./Done.scss')
import React from 'react'


const Done = ({ name }) => (
    <div className="Done">

      <h3>2016년 겨울 수련회 신청이 접수 되었습니다</h3>
      <p><span>{name}</span>, 수련회에서 많은 은혜 받으시길 바랍니다.</p>

      <p>1차 신청자(1/1일까지): $100, 2차신청자(1/1일이후): $120</p>

      <span>"대저 여호와께서 이같이 말씀하시되 하늘을 창조하신 이 그는 하나님이시니 그가 땅을 지으시고 그것을 만드셨으며 그것을 견고하게 하시되 혼돈하게 창조하지 아니하시고 사람이 거주하게 그것을 지으셨으니 나는 여호와라 나 외에 다른 이가 없느니라 하시니라" [사45:18]</span>

    </div>
)


export default Done

