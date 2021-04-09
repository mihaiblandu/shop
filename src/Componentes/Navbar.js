import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
import DropDown from './DropDown'
import Button from './Button'
import "./NavBar.css"
function Navbar() {

    const [click,setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu =()=>setClick(true)


    const onMouseEnter = () => {
        if (window.innerWidth < 920) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    
    const onMouseLeave = () => {
        setDropdown(false)
    }
    
    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                EPIC
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
                <ul className={click?'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                    >
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            Service <i className='fas fa-caret-down'></i>
                        </Link>
                        { dropdown&&  <DropDown/>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                            Contacts 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sing-in' className='nav-links' onClick={closeMobileMenu}>
                            Sign in
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sing-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                <Button/>

        </nav>
        </>
    )
}

export default Navbar
