import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import DeckIcon from '@mui/icons-material/Deck';
import tedxlogo from '../images/tedxwhite.png'
const Navbar = () => {
  return (
    <div>
        <nav>
         <div class="logo">
           <img style={{width:'100%',height:'100%'}} src={tedxlogo} alt="tedx"/>
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
             <Link style={{textDecoration:"none"}} to="/">
             <li><a href="/" style={{fontFamily:'helvetica',fontWeight:'bold'}}>Home</a><i  style={{fontSize:'3vh',color:'#5D3FD3'}} class="fa fa-home" aria-hidden="true"></i></li>
            </Link>
            <Link  style={{textDecoration:"none"}}to="/abouts">
            <li><a href="/abouts" style={{fontFamily:'helvetica',fontWeight:'bold'}}>About Us</a><i className='i' style={{fontSize:'3vh',color:'#5D3FD3'}} class="fa fa-info-circle" aria-hidden="true"></i></li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/speaker">
            <li><a href="/speaker" style={{fontFamily:'helvetica',fontWeight:'bold'}}>Speakers</a><i className='i' style={{fontSize:'3vh',color:'#5D3FD3'}}class="fa fa-volume-up" aria-hidden="true"></i></li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/team">
            <li><a href="/team" style={{fontFamily:'helvetica',fontWeight:'bold'}}>Team</a><i className='i' style={{fontSize:'3vh',color:'#5D3FD3'}} class="fa fa-users" aria-hidden="true"></i></li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/sponser">
            <li><a href="/" style={{fontFamily:'helvetica',fontWeight:'bold'}}>Sponsers</a><i className='i' style={{fontSize:'3vh',color:'#5D3FD3'}}  class="fa fa-street-view" aria-hidden="true"></i></li>
            </Link>
            {/* <Link style={{textDecoration:"none"}} to="/contact">
            <li><a href="/contact" style={{fontFamily:'helvetica',fontWeight:'bold'}}>Contact Us</a><i className='i'style={{fontSize:'3vh',color:'#5D3FD3'}} class="fa fa-fw fa-envelope"></i></li>
            </Link> */}
            
         </ul>
      </nav>
    </div>
  )
}

export default Navbar