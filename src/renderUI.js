import React from 'react'
import ReactDOM from 'react-dom'

const elementX = React.createElement('div', null, 'YoX!')

console.log(elementX);

ReactDOM.render(
  elementX,
  document.getElementById('root')
)

export default elementX;