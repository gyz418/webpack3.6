import React from 'react'
import { Spin, Alert,Pagination } from 'antd'
import fetchJSONP from 'fetch-jsonp'
import MovieItem from './MovieItem.jsx'

export default class MovieList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {  // 直接保存这里路由切换时要去更新它。。。
      movies: [],
      pageNow: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      type: props.match.params.type,
      isLoading: true
    }
  }

  componentWillMount () {
    /*
    * fetch 替代 XMLHttpRequest，
    * */
    /*fetch('http://localhost:1234/posts')
      .then(res => {
        return res.json() // 第一个then 拿到的是promise 要再then 一次
      }).then(res => {
      console.log(res)
    })*/
    this.getData()
  }

  componentWillReceiveProps(nextProps){
    // 这里可以监听props 变动  点击左侧的热映 上映 地址栏的props会变动
    console.log(nextProps)
    this.setState({
      isLoading:true,
      pageNow:parseInt(nextProps.match.params.page) || 1,
      type:nextProps.match.params.type
    },function () {
      // setState()是异步更新 ，在回调里调接口
      this.getData()
    })
  }

  render () {
    return <div>
      {this.renderList()}
      {/*<h1>MovieList</h1>*/}
      {/*<p>{this.props.match.params.type + this.props.match.params.page}</p>*/}
    </div>
  }

  getData = () => {
    // fetch('http://localhost:1234/posts')
    // 原生 fetch 跨域 使用 fetch-jsonp 用法一致
    // http://tool.oschina.net/codeformat/json/ 在线json 格式化
    const start = this.state.pageSize * (this.state.pageNow - 1)
    const url = `https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.pageSize}`
    // fetchJSONP('https://api.douban.com/v2/movie/in_theaters')
    fetchJSONP(url)
      .then(res => res.json()) // 箭头函数只有一行代码时，可以省略大括号和return
      .then(res => {
        console.log(res)
        this.setState({
          movies: res.subjects,
          isLoading: false,
          total: res.total
        })
      })
  }
  getData2 = () => {
    const res = require('../../a.json')
    console.log(res)
    setTimeout(() => {
      this.setState({
        movies: res.subjects,
        isLoading: false
      })
    }, 1000)
  }
  // 列表渲染
  renderList = () => {
    if (this.state.isLoading) {
      return <Spin tip="Loading...">
        <Alert
          message="加载中"
          description="请稍后..."
          type="info"
        />
      </Spin>
    } else {
      return <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.state.movies.map(res => {
            return <MovieItem {...res} key={res.id} history={this.props.history}/>
          })
          }
        </div>
        <Pagination defaultCurrent={this.state.pageNow} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged}/>
      </div>
    }
  }
  // 页码改变时调用
  pageChanged=(page)=>{
    // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
    // 使用 react-router-dom 实现编程式导航
    this.props.history.push('/movie/' + this.state.type + '/' + page)
  }
}