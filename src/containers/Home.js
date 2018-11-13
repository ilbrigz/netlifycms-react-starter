import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => (

  <div>
    <h1 style={{ textAlign: 'center' }}>{home}</h1>

    <Markdown source={home.content} escapeHtml={false} />
  </div>
))
