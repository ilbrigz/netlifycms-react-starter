import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'
import {FacebookIcon,FacebookShareButton} from 'react-share';
//
import logoImg from '../logo.png'

export default withRouteData(({home}) => {
const siteUrl = () => {
	if (typeof window !== 'undefined') {
 return window.location.href
	}
}
const {content, data} =(home[0])
return (

  <div>
  <FacebookShareButton quote="the great brigs" url={siteUrl}><FacebookIcon></FacebookIcon></FacebookShareButton>
  <h1 style={{ textAlign: 'center' }}>test</h1>
  <img src={data.image }alt=""/>
 <Markdown className="center is-100"  source={content} escapeHtml={false} />
  </div>
)})
