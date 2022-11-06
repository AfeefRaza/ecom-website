import React from 'react'
import { Link } from 'react-router-dom'

import './BrandItem.css'
export default function BrandItem(props) {
  let Route = `/${props.Route}`
  return (
    <div>
        <div className="container-Brand">
    <Link to={Route}>
      <div className="brandimage">
      <img src={props.BrandImg} alt="Iphone"  />
      </div>
      {props.BrandName}</Link>
    {/* <a href="#"> Samsung</a> */}
    </div>
    </div>
  )
}
