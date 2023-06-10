import './navbar.css'
import { useState } from 'react';
const NavBar = () => {
    const [clicked , setClicked] = useState(false);

    const handleClick = () => {
        setClicked((current) => !current)
    }
    return (
        
        <>
        <nav>
            <div className="first">
            <h1 className='win'>WIN </h1>   
            <h1 className='music'>MUSIC</h1>
            </div>

            <div className="menu-icons" >
                <i onClick={handleClick} className={
                    clicked ? "fas fa-times" : "fas fa-bars"
                } ></i>
            </div>

            <ul className={
                clicked ? "nav-menu active" : "nav-menu"
            }>
                <li className='nav-links'>
                    <a href="/home" >Home</a>
                </li>
                <li className='nav-links'>
                    <a href="/about" >About</a>
                </li>
                <li className='nav-links'>
                    <a href="/page" >Pages</a>
                </li>
                <li className='nav-links'>
                    <a href="/news" >News</a>
                </li>
                <li className='nav-links'>
                    <a href="/contact" >Contact</a>
                </li>
                <a href="/help" className='help par'>Help</a>
            <p className='doke'>|</p>
            <a href="/login" className='login par'>Login</a>
            <a href="/signin" className='signin par'>Create an account</a>
            </ul>
            
            
        </nav>
        </>
    )
}



export default NavBar;