import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './component/Counter.jsx'


ReactDOM.render(<div>
  <Counter initCount={3}/>
</div>, document.getElementById('app'))