import React from 'react'
import { Grid } from '@material-ui/core'
import v from '../images/TED.mp4'
import ReactPlayer from 'react-player/youtube'
import contact from '../images/contact2.gif'
import "./contact.css"
const Contact = () => {
  return (
    <Grid container style={{width:'100%',height:'100vh'}}>
    <div className='outerdiv' style={{ background:'rgb(30,30,40)'}}>
    < div className='contactus'>
    <div className='contactimage'>
    <img className='imgs' style={{width:'100%',height:'100%'}} src={contact} alt="contact"/>
    </div>
    <div className='formdiv'>
        <div style={{width:'100%',margin:'auto',border:'0.2vw solid #CC4949',padding:'2vw',position:'relative',top:'5.5vh',borderRadius:'1vw'}}>
        <div style={{width:'100%',textAlign:'center',display:'flex',flexDirection:'column'}}>
        <i class="fas fa-map-marker-alt" style={{color:'red',fontSize:'4vh'}}></i><span style={{color:'whitesmoke',fontSize:'2vh',fontWeight:'500',fontFamily:'helvetica',letterSpacing:'0.2vw'}}>Gautam Buddha Nagar,Greater Noida 201310</span>
        </div><br/>
        <div style={{width:'100%',textAlign:'center',display:'flex',flexDirection:'column'}}>
        <i class="fas fa-address-card" style={{color:'red',fontSize:'4vh'}}></i><span style={{color:'whitesmoke',fontSize:'2vh',fontWeight:'500',fontFamily:'helvetica',letterSpacing:'0.2vw'}}>+91 9118818705</span>
        </div>
        </div> 
        
        <form action="https://formsubmit.co/rohanmahto592@gmail.com" method='post'> 
          
            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="email" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
    </div>
    
    </div>
    </Grid>
  )
}

export default Contact