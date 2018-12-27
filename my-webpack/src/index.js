import React from 'react'
import ReactDOM from 'react-dom'

/*==========入门===============*/
/**
 * react v16.7.0
 * 最简react
 * React.createElement(标签，属性，子节点)
 */
/*
let myH1 = React.createElement('h1', null, 'h1h1h1')
let myDiv = React.createElement('div', {title: 'this is div', id: 'myDiv'}, 'haha', myH1)
ReactDOM.render(myDiv, document.getElementById('app'))
*/

/*=========== JSX ===================*/
/*
* JSX
* JSX 运行时，会先转换为 React.createElement
* yarn add babel-preset-react -D
* .babelrc
*  presets:["react"]
* */
/*
let mytitle = 'this is title'
let arr = []
for(let i =0;i<3;i++){
  let p = <p key={i}>this is ppppp</p>
  arr.push(p)
}
let myDiv =
  <div className="aaa">
    这是 jsx,使用js时要写在内大括号内,{/!*注释也属于js,也要写在大括号内*!/}
    <h1>haha</h1>
    <h2 title='123'>heheh</h2>
    <h2 title={mytitle}>hihi</h2>
    {arr}
  </div>
ReactDOM.render(myDiv, document.getElementById('app'))
*/

/*================组件=================*/
/**
 * 构造函数就是组件
 * react 解析标签时，首字母大写时按组件渲染，首字母小写按普通html解析
 * @constructor
 */
function Hello (props) {
  // return 'abc'
  return <div className="div">
    {/*props 得到的数据是只读的，不能修改值*/}
    helloworld {props.name}
  </div>
}

let person = {
  name: 'jia',
  age: 30
}
import World from './component/World.jsx'
// import myclass from './myclass.js'
// import myclass from './myclass2.js'

import Test from './component/Test.jsx'

let myAddr = '传智'
ReactDOM.render(<div>
  {/*<Hello />*/}
  {/*<Hello {...person}/>*/} {/*传参*/}
  <World name={person.name}/> {/*引入组件js*/}
  <Test addr={myAddr}/>
</div>, document.getElementById('app'))