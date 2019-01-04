import React from 'react'
import { Layout, Menu } from 'antd'

const {Content, Sider} = Layout
import { Route, Link, Switch } from 'react-router-dom'
import List from './MovieList.jsx'
import Details from './MovieDetails.jsx'

export default class Movie extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Layout style={{height: '100%'}}>
      <Sider width={200} style={{background: '#fff'}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{height: '100%', borderRight: 0}}>
          <Menu.Item key="1">
            <Link to="/movie/coming_soon/1">正在热映</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/movie/in_theaters/1">正在上映</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/movie/top250/1">Top</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{padding: '0', borderLeft: '1px solid #ccc'}}>
        <Content style={{
          background: '#fff', padding: 10, margin: 0, minHeight: 280,
        }}
        >
          {/* exact 会从上到下全部匹配 路由中的switch 可以只匹配第一个*/}
          <Switch>
            <Route exact path="/movie/detail/:id" component={Details}></Route> {/* 详情 */}
            <Route exact path="/movie/:type/:page" component={List}></Route> {/* 列表 */}
          </Switch>
        </Content>
      </Layout>
    </Layout>

  }
}