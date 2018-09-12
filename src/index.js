import React from 'react';
import ReactDOM from 'react-dom';
//引入样式
import {HashRouter} from 'react-router-dom'

// 引入需要映射的路由组件
import Main from './pages/main'

import {Provider} from 'react-redux'
import store from './redux/store'
import './mock/mockServer'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Main/>
    </HashRouter>
  </Provider>

), document.getElementById('root'));
