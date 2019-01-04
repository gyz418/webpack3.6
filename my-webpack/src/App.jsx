import React from 'react'

import { HashRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import app from './css/app.less'

import Homes from './component/Homes.jsx'
import Movie from './component/Movie.jsx'
import About from './component/About.jsx'
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return <HashRouter>
      <div style={{height:'100%'}}>
        <Layout className="layout" style={{height:'100%'}}>
          {/* 头 */}
          <Header>
            <div className={app.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split('/')[1] || 'movie']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="movie"><Link to="/movie">电影</Link></Menu.Item>
              <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
            </Menu>
          </Header>

          {/* 内容*/}
          <Content style={{background:'#fff',flex:1}}>
            {/* route 还是一个占位块*/}
            <Route path='/home' component={Homes}/>
            <Route path='/movie' component={Movie}/>
            <Route path='/about' component={About}/>
          </Content>

          {/* footer */}
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    </HashRouter>
  }
}