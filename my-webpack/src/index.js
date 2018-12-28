import React from 'react'
import ReactDOM from 'react-dom'

import CommentList from './component/CommentList.jsx'  // jsx 引入时要大写
// import Test from './component/Test.jsx'
import Test from './component/Test2.jsx'    /* context 应用 */

ReactDOM.render(<div>
  {/*<CommentList/>*/}  {/* 评论列表 */}
  <Test/>
</div>, document.getElementById('app'))