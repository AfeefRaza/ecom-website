import React from 'react'
import './TopBar.css';
import { Link } from "react-router-dom";
export default function topbar() {
  return (
    <>
    <nav className='Topbar '>
        <ul>
            <li className='topbaritem'> <Link to="/">HOME</Link></li>
            <li className='topbaritem'> <a href="/">SELL ON BUDGET STORE</a></li>
            <li className='topbaritem'> <a href="/">CUSTOMER CARE</a></li>
            <div className="row-3">
            <li className='topbaritem'> <a href="/">TRACK MY ORDER</a></li>
            <li className='topbaritem'> <Link to="/Login">LOGIN</Link></li>
            <li className='topbaritem'> <Link to="/Signup">SIGNUP</Link></li>
            </div>
        </ul>

    </nav>
    </>
  )
}
