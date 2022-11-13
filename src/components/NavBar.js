import React,{useState,useRef,useEffect} from 'react'
import './NavBar.css';
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import SideBar from './Ham-menu';
import Logo from './Logo';
export default function NavBar() {
    const [hammenu, setHammenu] = useState(false)
    let menuRef = useRef();
    useEffect(() => {
        if (hammenu) {
            
            document.addEventListener("mousedown", (event) => {
                if (!menuRef.current.contains(event.target)) {
                    setHammenu(false)
                    console.log("afeef")
                    
                }
            })
        }
    })
    const menuOpen = () => {
        setHammenu(!hammenu)
      }


  return (
    <>
        <nav className='Navbar sticky-top'>
            <div className="logo">
                <Link to="/">
                    <div className="lgo"><Logo/></div>
                    </Link>
            </div>
            <div className="search">
            <input type="text" placeholder="Search"/>
            <button className="scope">
                <AiOutlineSearch size={"1.5rem"} color={"var(--clr2)"}/>
            </button>
            </div>
            <div className="cart">
                <a href="/"><MdShoppingCart size={"1.5rem"} color={"var(--clr1)"} /></a>
            </div>
            

              <div className="wrapper">
                  <Link to="/orders"><span>Returns <br/> <b>& Orders</b></span></Link>
              </div>



              <div className="wrapper">
                  <a href="/"><span>Deliver to <br/><b>Pakistan</b></span></a>
              </div>
              <div className="hamburgermenu" style={{ display: hammenu === false ? 'none' : 'block' }}> 
                <SideBar ref={menuRef} pageWrapId={"page-wrap"} outerContainerId={"App"} menuOpen={menuOpen} />
              </div>
            <div className="hamburger" onClick={ () => { menuOpen()} }>
                <GiHamburgerMenu  size={"1.5rem"} color={ "var(--clr1"}/>
            </div>
              
        </nav>
    </>
  )
}

