import React from 'react'
import ReactTypes from 'prop-types'
// ReactTypes 这个名可自定义

export default class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: 'ok',
      count: props.initCount   // 构造函数内没有 this.props
    }
    // bind this
    this.add3=this.add3.bind(this,'333','444')   // 返回值是一个函数
  }

  // 默认值 在构造器外
  static defaultProps = {
    initCount: 0
  }
  //安装 yarn add prop-types 包，做属性类型校验 ，react v15后独立出来
  static propTypes = {
    initCount: ReactTypes.number
  }

  componentWillMount () {  // 类似vue  created()
    // dom 还没有加载
    // console.log(document.getElementById('a'))
    console.log(this.props.initCount)   // props 有值
    console.log(this.state.msg)  // ok
    this.myFn()   // 函数可调用
  }

  render () {
    return <div>
      <h1>this is counter</h1>
     {/* <input type="button" value="+1" id="btn" onClick={this.add}/>  */} {/* 第一种不能传参，一传参 this.add(1) 就变成调用了*/}
      {/*<input type="button" value="+1" id="btn" onClick={this.add2.bind(this,'aa','bb')}/>*/}
      <input type="button" value="+1" id="btn" onClick={this.add3}/>  {/* 这种传参要写到构造函数里面去，不方便点*/}
      {/*<input type="button" value="+1" id="btn" onClick={()=>{this.add4('4444','55555')}}/>*/}
      <h3 id="a" ref="h3">num:{this.state.count}</h3>
      <p>react 没有双向绑定 v-model 在输入框中输入不了内容</p>
      <input type="text" value={this.state.count} onChange={this.inputChange} ref="val"/>
    </div>
  }

  componentDidMount () {   // vue 的 mounted
                           // 有dom 了
    console.log(document.getElementById('a'))
    // 原生事件可行，不推荐
    /*    document.getElementById('btn').onclick=()=> {
          this.setState({
            count:this.state.count+1
          })
        }*/
  }

  // 组件是否更新
  shouldComponentUpdate (nextProps, nextState) {
    // return true // return false  state会更新但页面不会更新
    // console.log(this.state.count)  // 拿到的值是旧的
    console.log(nextState.count)
    // return nextState.count % 2 === 0   // 偶数才更新，可以直接在函数判断就行了
    return true
  }

  // 组件未更新，虚拟DOM  真实DOM 都是旧的
  componentWillUpdate () {
    console.log(this.refs.h3.innerHTML)
  }

  componentDidUpdate () {
    console.log('组件更新了')
  }

  componentWillReceiveProps(nextProps){
    // 只有父组件修改prop值，子组件才会触发
    console.log('接收新的prop')
    console.log(this.props) // 旧数据
    console.log(nextProps) // 最新数据

  }

  add = () => {   // 直接 add(){ this 变成 undefined}
    this.setState({
      count: this.state.count + 1
    })
  }
  add2(a,b){
    this.setState({
      count: this.state.count + 1
    })
    console.log(a)
    console.log(b)
  }
  add3(a,b){
    this.setState({
      count: this.state.count + 1
    })
    console.log(a)
    console.log(b)
  }
  add4(a,b){
    this.setState({
      count: this.state.count + 1
    })
    console.log(a)
    console.log(b)
  }
  inputChange=(e)=>{
    // console.log(this.refs.val.value)
    console.log(e.target.value)
    this.setState({
      count:e.target.value
    })
  }

  myFn () {
    console.log('this is fn')
  }
}