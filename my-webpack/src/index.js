import React from 'react'
import ReactDOM from 'react-dom'
// react v16.7.0
var myH1 = React.createElement('h1',null,'h1h1h1')
var myDiv = React.createElement('div', {title: 'this is div', id: 'myDiv'}, 'haha',myH1)
/* React.createElement(标签，属性，子节点)*/

ReactDOM.render(myDiv, document.getElementById('app'))