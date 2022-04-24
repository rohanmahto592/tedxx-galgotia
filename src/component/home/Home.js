import React,{useEffect, useState,useRef} from 'react'
import background from '../images/tedtalk.jpeg'
import './home.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import 'aos/dist/aos.css'
import pdf from '../images/event.pdf'
import Footer from '../footer/Footer'
const Home = () => {
  const [sdays,setdays]=useState('00')
  const [shours,sethours]=useState('00')
  const [sminutes,setmin]=useState('00')
  const [sseconds,setseconds]=useState('00')
  let interval=useRef();

  const starttimer=()=>{
    const countdatetime=new Date('April 28, 2022 00:00:00').getTime();
    interval=setInterval(()=>{
      const now=new Date().getTime();
      const distance=countdatetime-now;
      console.log(distance)
      const days=Math.floor(distance/(1000*60*60*24));
      const Hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
      const minu=Math.floor((distance%(1000*60*60*24))/(1000*60));
      const seconds=Math.floor((distance%(1000*60))/1000);
      if(distance<0)
      {
        clearInterval(interval.current)
      }
      else
      {
        setdays(days)
        sethours(Hours)
        setmin(minu)
        setseconds(seconds);
      }

    },1000)
  }
  const pdfopen=()=>{
    window.open(pdf)
  }


  useEffect(()=>{
    Aos.init({offset: 100,
      duration: 2000,
      easing: 'ease-in-sine',
      delay:60,
      })
  },[])
  useEffect(()=>{
    starttimer();
    return ()=>{
      clearInterval(interval.current)
    }
  },[])
  return (
   <>
    <div data-aos="fade-up" class="banner" style={{ width:'100%',
    height:'130vh',
    backgroundImage:`url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',filter: 'blur(4px)',overflow:'hidden'}}></div>
    <div data-aos="fade-up" class="content"style={{zIndex:'2',position:'absolute',top:'-5%',width:'100%',margin:'auto',}}>
    <section className='timer' style={{width:'100%',margin:'auto',}} >
      <div style={{width:'85%',margin:'auto',paddingTop:'3vh'}} >
        <span>{<TimerOutlinedIcon style={{color:'red',fontSize:'12vh'}}/>}</span>
        <h2 style={{fontWeight:'bolder',fontSize:'3vh',letterSpacing:'0.8vh',color:'red'}}>Coming Soon!!</h2>
        <p style={{fontWeight:'bolder',fontSize:'4vh',letterSpacing:'0.5vh',color:'whitesmoke'}}>First Ever TEDx at Galgotias College Of Engineering And Technology !!</p>
      </div>
      <div>
        <section className='dates'>
          <p style={{fontSize:'9vh',letterSpacing:'0.5vw',color:'white',fontWeight:'bolder'}}>{sdays}</p>
          <p style={{fontSize:'5vh',fontWeight:'bolder',color:'red'}}><small >Days</small></p>
        </section>
        <span style={{fontSize:'8vh',fontWeight:'bolder'}}>:</span>
        <section>
          <p style={{fontSize:'8vh',letterSpacing:'0.5vw',color:'white',fontWeight:'bolder'}}>{shours}</p>
          <p style={{fontSize:'4vh',fontWeight:'bolder',color:'red'}}><small>Hours</small></p>
        </section>
        <span style={{fontSize:'6vh',letterSpacing:'0.5vw',fontWeight:'bolder'}}>:</span>
        <section>
          <p style={{fontSize:'6vh',letterSpacing:'0.5vw',color:'white',fontWeight:'bolder'}}>{sminutes}</p>
          <p style={{fontSize:'3vh',fontWeight:'bolder',color:'red'}}><small>Minutes</small></p>
        </section>
        <span style={{fontSize:'4vh',letterSpacing:'0.5vw',fontWeight:'bolder'}}>:</span>
        <section>
          <p style={{fontSize:'4vh',color:'white',fontWeight:'bolder',letterSpacing:'0.5vw'}}>{sseconds}</p>
          <p style={{fontSize:'2vh',fontWeight:'bolder',color:'red'}}><small>Seconds</small></p>
        </section>
      </div>
      
    </section>
    <button style={{width:'20vh',margin:'auto',fontSize:'3vh',padding:"1.2vh",color:'whitesmoke',background:'rgb(30,30,40)',fontFamily:'helvetica',border:'none',borderRadius:'1vh',position:'relative',top:'10vw',cursor:'pointer'}} onClick={()=>pdfopen()}>Event details</button>
    </div>
    <Footer/>
    
    
    
    
    </>

    
    
    
   
  )
}

export default Home