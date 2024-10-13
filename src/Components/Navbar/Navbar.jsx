import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import nav_dropdown from '../Assets/nav_dropdown.png'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef()
  const dropdownIconRef = useRef()

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    dropdownIconRef.current.classList.toggle('open')
  }

  const closeMenu = () => {
    menuRef.current.classList.remove('nav-menu-visible')
    dropdownIconRef.current.classList.remove('open')
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
          to='/frontend'
        >
          <img src={logo} alt='' />
          <p>SHOPPER</p>
        </Link>
      </div>
      <img
        className='nav-dropdown'
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=''
        ref={dropdownIconRef}
      />
      <ul ref={menuRef} className='nav-menu'>
        <li
          onClick={() => {
            setMenu('shop')
            closeMenu()
          }}
        >
          <Link style={{ textDecoration: 'none', color: '#626262' }} to='/frontend'>
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu('mens')
            closeMenu()
          }}
        >
          <Link style={{ textDecoration: 'none', color: '#626262' }} to='/frontend/mens'>
            Men
          </Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu('womens')
            closeMenu()
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: '#626262' }} to='/frontend/womens'
          >
            Women
          </Link>
          {menu === 'womens' ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
            closeMenu()
          }}
        >
          <Link style={{ textDecoration: 'none', color: '#626262' }} to='/frontend/kids'>
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link style={{ textDecoration: 'none' }} to='/frontend/login'>
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/frontend/cart'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
