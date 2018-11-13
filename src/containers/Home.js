import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{home.data.title}</h1>
    <img src={home.data.image} alt="" style={{ display: 'block', margin: '0 auto' }} />
    <Markdown source={post.content} escapeHtml={false} />
  </div>
))
