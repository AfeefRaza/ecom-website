import React,{ forwardRef } from "react";
import "./Ham.css";
import { Link } from "react-router-dom";
import { MdCancel } from 'react-icons/md';
    const SideBar = forwardRef((props, ref) => {
        const {menuOpen} = props;
  return (

    <div className="hammenu" ref={ref}>
        <div className="cancelbtn">
        <MdCancel size={"2rem"} onClick={ () => { menuOpen()} }/>
        </div>
         <li className='menuitem'><Link to="/">HOME</Link></li>
            <li className='menuitem'> <a href="/">SELL HERE</a></li>
            <li className='menuitem'> <a href="/">CUSTOMER CARE</a></li>
            <li className='menuitem'> <a href="/">TRACK MY ORDER</a></li>
            <li className='menuitem'> <Link to="/Login">LOGIN</Link></li>
            <li className='menuitem'> <Link to="/Signup">SIGNUP</Link></li>
            <div className="wrapper visible">
                  <Link to="/orders"><span>Returns <br/> <b>& Orders</b></span></Link>
              </div>



              <div className="wrapper visible">
                  <a href="#"><span>Deliver to <br/><b>Pakistan</b></span></a>
              </div>
    </div>
  );
});
export default SideBar