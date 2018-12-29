import React from 'react'

/*  HashRouter 路由跟踪器，包含所有路由信息，一个网站只用一次
*   Route 路由规则，
*   Link 类似 vue的 <router-link></router-link>
*
* */
import { HashRouter, Route, Link } from 'react-router-dom'
// https://reacttraining.com/react-router/web/guides/quick-start

import Home from './component/home.jsx'
import List from './component/list.jsx'
import { DatePicker } from 'antd'  // 按需引入 利用babel-plugin-import  自动导入样式
// https://ant.design/docs/react/introduce-cn
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return <HashRouter>
      <div>
        <DatePicker/>
        <h1>this is app</h1>
        <Link to="/home">home</Link>&nbsp;&nbsp;
        <Link to="/list/dfdfd">list</Link>&nbsp;&nbsp;

        {/* exact 路由精确匹配，默认模糊匹配*/}
        {/*<Route path="/home" component={Home} exact/>*/}
        {/* 精确匹配时，指定后面是匹配参数*/}
        <Route path="/home/:type/:id" component={Home} exact/>
        <Route path="/list" component={List}/>
      </div>
    </HashRouter>
  }
}