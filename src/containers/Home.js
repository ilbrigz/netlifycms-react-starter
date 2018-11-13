import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => {
console.log(home[0])

return (

  <div>
    <h1 style={{ textAlign: 'center' }}>test</h1>


  </div>
)})
