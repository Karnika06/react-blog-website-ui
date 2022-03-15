import React from 'react'
import "./navbar.css";

export default function navbar() {
    return (
        <div class="top-bar">
            <div className="top-left">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div class="top-center">
                <ul className = "NavbarList">
                    <li className='navbar-item'>HOME</li>
                    <li className='navbar-item'>ABOUT</li>
                    <li className='navbar-item'>CONTACT</li>
                    <li className='navbar-item'>WRITE</li>
                    <li className='navbar-item'>LOGOUT</li>
                </ul>
            </div>
            <div className="top-right">
                <img className = "DisplayPic" src="displayPic.jpg" alt=""/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
