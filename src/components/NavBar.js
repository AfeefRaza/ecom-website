import React from 'react'
import './NavBar.css';
import cart from './cart.png'
import logo from './logo.png'
import scope from './scope.png'
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
        <nav className='Navbar sticky-top'>
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="search">
            <input type="text" placeholder="Search"/>
            <button className="scope">
                <img src={scope} alt="scope" />
            </button>
            <div className="cart">
                <a href="#"><img src={cart} alt="cart" /></a>
            </div>
            </div>
            

              <div className="wrapper">
                  <Link to="/orders"><span>Returns <br/> <b>& Orders</b></span></Link>
              </div>



              <div className="wrapper">
                  <a href="#"><span>Deliver to <br/><b>Pakistan</b></span></a>
              </div>


        </nav>
    </>
  )
}

