import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import {FacebookIcon,FacebookShareButton} from 'react-share';
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => {
const {content, data} =(home[0])
return (

  <div>
 {window?<FacebookShareButton quote="the great brigs" url={window.location.href}><FacebookIcon></FacebookIcon></FacebookShareButton>: ''}
  <h1 style={{ textAlign: 'center' }}>test</h1>
  <img src={data.image }alt=""/>
 <Markdown className="center is-100"  source={content} escapeHtml={false} />
  </div>
)})
