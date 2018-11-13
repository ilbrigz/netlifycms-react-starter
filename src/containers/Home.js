import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => {

const {content, data} =(home[0])
return (

  <div>
  <h1 style={{ textAlign: 'center' }}>test</h1>
  <img src={data.image }alt=""/>
 <Markdown source={content} escapeHtml={false} />
  </div>
)})
