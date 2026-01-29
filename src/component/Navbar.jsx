import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav >
        <ul className="navbar">
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li> 
          <li><Link className='link' to="/contact">Contact</Link></li>
          <li><Link className='link' to="/service">Service</Link></li>
          <li><Link className='link' to="/login">login</Link></li>
          <li><Link className='link' to="/useState">UseState</Link></li>
          <li><Link className='link' to="/useEffect">UseEffect</Link></li>
          <li><Link className='link' to="/useRef">UseRef</Link></li>
          <li><Link className='link' to="/useReducer">UseReducer</Link></li>
          <li><Link className='link' to="/useMemo">UseMemo</Link></li>
          <li><Link className='link' to="/useCallback">UseCallback</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar