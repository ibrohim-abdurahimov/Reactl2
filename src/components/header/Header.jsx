import React from 'react'
import "./Header.scss"
import logo from "../../assets/Apple Watch.svg"
import { IoSearch } from "react-icons/io5"
import { FaUserAlt } from "react-icons/fa"
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";




const NAVBAR_ITEMS = ["Home", "Brands", "Recent Products", "Contact", "About"]
const Header = () => {
    const navbarItems = NAVBAR_ITEMS?.map((link, index)=>{
        return <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>{link}</span>
                        </a>
                    </li>
    })
  return (
    <header className='header'>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <div className="navbar__watch">
                        <img src={logo} alt="" />
                    </div>
                    <p className="navbar__title">Mohid</p>
                </div>
                <ul className="navbar__collection">
                    {navbarItems}
                </ul>
                <div className="navbar__icon">
                    <div className="navbar__menu">
                        <FaBars />
                    </div>
                    <div>
                        <IoSearch />
                    </div>
                    <div>
                        <FaUserAlt />
                    </div>
                    <div>
                        <RiShoppingCart2Fill />
                    </div>
                    
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header