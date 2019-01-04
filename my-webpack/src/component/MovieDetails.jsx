import React from 'react'
import {Spin, Alert, Button,Icon } from 'antd'
import fetchJSONP from 'fetch-jsonp'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      info:{},
      isLoading:true
    }
  }

  componentWillMount(){
    fetchJSONP('https://api.douban.com/v2/movie/subject/'+this.props.match.params.id)
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        this.setState({
          info:res,
          isLoading:false
        })
      })
  }
  render () {
    return <div>
      <Button type="primary" onClick={this.goBack}>
        <Icon type="left" />返回
      </Button>
      {this.renderContent()}
    </div>
  }
  // 返回
  goBack=()=>{
    // this.props.history.goBack(-1)    // 好麻烦的返回
    history.back()   // 这种也行
  }

  // 列表渲染
  renderContent = () => {
    if (this.state.isLoading) {
      return <Spin tip="Loading...">
        <Alert
          message="加载中"
          description="请稍后..."
          type="info"
        />
      </Spin>
    }else{
      return <div style={{textAlign:'center'}}>
        <h1>{this.state.info.title}</h1>

        <img src={this.state.info.images.large} alt=""/>
        <p>{this.state.info.summary}</p>
      </div>
    }
  }
}