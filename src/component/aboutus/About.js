import React,{useEffect, useState} from 'react'
import './about.css'
import tedx from '../images/tedx3.gif'
import tedx2 from '../images/campus1.jpeg'
import robot from '../images/dancing.gif'
import Popup from '../home/Popup'
import ted from '../images/ted.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../footer/Footer'
const About = () => {
 

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  useEffect(()=>{
    Aos.init({offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 80,})

  },[])
  return (
    <>
   
      
    <div data-aos="fade-up" style={{textAlign:'center',backgroundColor:'black'}}>
        
        {/* <div class="float">
            <img class="img" style={{width:'50%',opacity:'0.7'}}  src={tedx} alt="tedx"/>
            <div className='aboutss' style={{position:'relative',top:'-40vh',width:'80%',margin:'auto'}}>
              <span style={{color:'white',fontFamily:'PT Sans Caption',fontSize:'2.2vh'}}>A TEDx event is organized by volunteers from the local community, and just like TED events, it lacks any commercial, religious or political agenda. Its goal is to spark conversation, connection and community.
                    Why do few succeed and even though some people may share an equal level of passion and enthusiasm , they fail ?
                    They have insights , distinctions and startgies that allow them to acheive more quickly . 
                    So Here are first ever Galgotias Tedx
                    The theme of the tedx is breakthrough
                    The truth is success or the breakthrough is a journey and not the destination.
                    An empowering story or disempowering one is influenced most powerfully by the mental and 
                    emotional state you’re in at that moment in time.
                    Where focus goes, energy flows.
                    The tedx would contain some valuable talks by people who have attained different heights in different walks of life .
                    This would guide the students towards different path . 
                    There would be thrilling performances as well to hold the interest of the audience .
                    The attendenes of the tedx would be students which would one day be the future of our country . They will get idea from different walks of life that will help reach emmense success</span>
            </div>
        </div> */}
        
        <div data-aos="fade-up" className="ted">
    <div className='imagess'>
      <img style={{width:'100%',height:'100%'}} src={ted} alt="ted"/>
    </div>
    <div data-aos="fade-in" className="textss">
      <div className='innertext' style={{width:'90%',margin:'auto',textAlign:'center',}}>
      <span style={{fontFamily:'helvetica',fontSize:'3.5vh',color:'red',fontWeight:'bold',letterSpacing:'0.3vw'}}>About Us</span><br/><br/>
      <span style={{fontFamily:'helvetica',fontSize:'3.5vh',color:'white',fontWeight:'bold',letterSpacing:'0.5vw'}}>An ever-growing library of TED Talks, curated for work</span>
      </div>
      <div  style={{paddingLeft:'2vw',width:'90%',paddingTop:'5vw',margin:'auto'}}>
          <ul style={{listStyleType:'circle',color:'white',letterSpacing:'0.2vw',fontFamily:'PT Sans Caption',fontWeight:'400',fontSize:'1.7vh'}}>
              <li>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience</li><br/>
              <li>At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event</li> <br/>        
              <li>The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).</li> < br/>
                                    
          </ul>
          <div>
    <input style={{color:'white',backgroundColor:'black',fontSize:'2vh',padding:'1vh',border:'none',borderRadius:'1vh',marginTop:'-1vh'}}
    
      type="button"
      
      value="Demo Video"
      onClick={togglePopup}
    />
   
    {isOpen && <Popup
      
      
      handleClose={togglePopup}
    />}
  </div>
      </div>

      
    </div> 
    </div>
        <div data-aos="fade-up" style={{width:'100%'}}>
          <img style={{width:'100%',height:'100%'}} src={robot} alt="robot"/>
        </div>
        <div data-aos="fade-up" class="hero">
        <span style={{color:'white',fontSize:'4.5vw',textTransform:'uppercase',fontFamily:'helvetica',fontWeight:'bold',letterSpacing:'0.2vw'}}>Our Venue!!</span>
        <div class="slide1">
            <img class="college" src={tedx2} alt="venue"/>
            <div class="contentss">
                <h2 style={{color:'white',fontSize:'5vw',fontFamily:'PT Sans Caption',letterSpacing:'0.2vw'}}>April 27, 2022</h2>
                    <h3 style={{color:'white',fontSize:'4vw',fontFamily:'PT Sans Caption',letterSpacing:'0.2vw'}}>11:00am - 5:00pm IST</h3>
                    <h4 style={{color:'white',fontSize:'3vw',fontFamily:'PT Sans Caption',letterSpacing:'0.2vw'}}>(UTC +5.5hrs)</h4>
                    <h4 style={{color:'white',fontSize:'3vw',fontFamily:'PT Sans Caption',letterSpacing:'0.2vw'}}>Greater Noida, Uttar Pradesh</h4>

            </div>
        </div>
        </div>
        

    </div>
    <Footer/>
    </>
    
  )
}

export default About