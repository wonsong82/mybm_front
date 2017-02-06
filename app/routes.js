import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Welcome from './components/app/pages/Welcome'

// 2016 순모임
import Soon16_Register from './containers/app/pages/soon-16/Register'
import Soon16_Done from './containers/app/pages/soon-16/Done'

// 2016 겨울 수련회
import Retreat16Winter_Apply from './containers/app/pages/retreat-16-winter/Apply'
import Retreat16Winter_Done from './containers/app/pages/retreat-16-winter/Done'

// 2016 스키트립
import Skitrip1702_Apply from './containers/app/pages/skitrip-1702/Apply';
import Skitrip1702_Done from './containers/app/pages/skitrip-1702/Done';

export default (
  <Route path="/" component={App}>

    {/*Index*/}
    <IndexRoute 
           components={{ page: Welcome }} />

    <Route path="soon-16/register"
           components={{ page: Soon16_Register }} />
    <Route path="soon-16/done"
           components={{ page: Soon16_Done }} />


    <Route path="retreat-16-winter/apply"
           components={{ page: Retreat16Winter_Apply }} />
    <Route path="retreat-16-winter/done"
           components={{ page: Retreat16Winter_Done }} />


    <Route path="skitrip-1702/apply"
           components={{ page: Skitrip1702_Apply }} />
    <Route path="skitrip-1702/done"
           components={{ page: Skitrip1702_Done }} />


  </Route>
)