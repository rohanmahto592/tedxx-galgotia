import React from 'react'
import './footer.css'
import logo from '../images/tedxwhite.png'
const Footer = () => {
var a= new Date().getFullYear;
  return (
    <div>
        <footer class="footer-distributed">

     <div class="footer-left">
    <span className='logos'><img style={{width:'24vh'}} src={logo} alt="logo"/></span>

    <p class="footer-links">
        <a style={{paddingRight:'0.2vw'}} href="/">Home</a>
        |
        <a style={{paddingLeft:'0.2vw',paddingRight:'0.2vw'}}  href="/abouts">About</a>
        |
        <a style={{paddingLeft:'0.2vw',paddingRight:'0.2vw'}} href="/team">Team</a>
        |
        <a style={{paddingLeft:'0.2vw'}} href="/speakers">Speakers</a>
    </p>

    <p class="footer-company-name">Copyright © {new Date().getFullYear() } <strong>Tedx gcet</strong> All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i style={{color:'red'}} class="fa fa-map-marker"></i>
        <p style={{color:'#e0ac1c'}}><span>Gautam Buddha Nagar,Greater Noida 203100</span>
            Uttar Pradesh</p>
    </div>

    <div>
        <i style={{color:'green'}} class="fa fa-phone"></i>
        <p>+91 9599046797</p><br/><p style={{paddingLeft:'4vw',color:'#e0ac1c'}}>(Abhimanyu Singh Negi,Marketing)</p>
       
    </div>
    <div>
        <i style={{color:'green'}} class="fa fa-phone"></i>
        <p>+91 7838858339</p><br/><p style={{paddingLeft:'4vw',color:'#e0ac1c'}}>(Priyottama Rani,Marketing)</p>
       
    </div>
    <div>
        <i style={{color:'purple'}}class="fa fa-envelope"></i>
        <p style={{color:'white'}}><a href="mailto:studentcouncilgcet@gmail.com" style={{color:'white'}}>studentcouncilgcet@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About TEDx</span>
        <strong>A Tedx event</strong>  is organized by volunteers from the local community, and just like TED events, it lacks any commercial, religious or political agenda. Its goal is to spark conversation, connection and community.
       
    </p>
    <div class="footer-icons">
        <a style={{color:'purple'}} href="https://www.facebook.com/tedxgalgotia/"><i class="fa fa-facebook"></i></a>
        <a style={{color:'red'}}href="https://instagram.com/tedxgalgotia?igshid=YmMyMTA2M2Y="><i class="fa fa-instagram"></i></a>
        <a style={{color:' red'}} href="https://www.linkedin.com/company/tedxgalgotia/"><i class="fa fa-linkedin"></i></a>
        <a style={{color:'orange'}} href="https://twitter.com/tedxgalgotia"><i class="fa fa-twitter"></i></a>
        
    </div>
</div><br/>
<span className='footername' style={{fontFamily:'Helvetica'}}>Made With <i style={{color:'red',fontSize:'3.5vh'}} class="fa fa-heart" aria-hidden="true"></i> By Rohan Mahto</span>
</footer>

    </div>
  )
}

export default Footer