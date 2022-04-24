import React,{useEffect} from 'react'
import './speaker.css'
import aman from '../images/aman.jpeg'
import {Grid} from '@material-ui/core'
import anuj from '../images/anug.jpeg'
import dig from '../images/dig.jpeg'

import tedx from '../images/tedx2.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../footer/Footer'
import sangeeta from '../images/sangeeta.png'
import nancy from '../images/nancy.png'
import munish from '../images/munish.png'
import areen from '../images/areen.jpeg'

 

const data=[
    {
        image:aman,name:'Aman Dhattarwal',job:'Youtuber | Online Educator'},
        
    {
        image:anuj,name:'Anuj Sharma',job:'YouTuber | Online Educator'
    },
    {
        image:areen,name:'Areen Rayees',job:'Student, GCET'},
    {
        image:sangeeta,name:'Dr.Sangeeta',job:'Founder, Urban Interiors'
    },
    {
        image:munish,name:'Dr.Munish Jindal',job:'Founder, Hover Robotix'
    },
    {
        image:nancy,name:'Dr.Nancy Juneja',job:'Founder, RevUp Life Skills'
    },

{
    image:dig,name:'DIG N N Dubey',job:'DIG Kirti Chakra'
},


]
const Speaker = () => {
    useEffect(()=>{
        Aos.init({offset: 200,
          duration: 1000,
          easing: 'ease-in-sine',
          delay: 60,})
      },[])
  return (
    <>
    <div data-aos="fade-up" style={{background:'#212121',height:'100%'}}>
    <div style={{textAlign:'center',width:'100%',height:'100vh',display:'flex',flexDirection:'column',backgroundImage:`url(${tedx})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',overflow:'hidden'}}>
      <div style={{width:'80%',position:'relative',margin:'auto'}}>
        <span style={{fontWeight:'bolder',fontSize:'5vh',color:'white',fontFamily:'Helvetica'}}>OUR SPEAKERS</span><br/>
        <span style={{fontWeight:'bolder',fontSize:'3vh',color:'whitesmoke',fontFamily:'Helvetica'}}>From entrepreneurs to child prodigies to actual princes, we’ve had some wonderful speakers from diverse backgrounds. The powerful stories and ideas they shared epitomize the spirit of TEDx and we’re truly privileged to have hosted these icons.</span>
        
    </div> 
    
    </div>
    
    <Grid style={{paddingTop:'2vw'}} container spacing='3' justifyContent='space-evenly' >
        {
            data.map((item)=>(
                <Grid item lg={4} md={6} xs={12}>
             <section data-aos="fade-up" id="team" class="team-area">
		       <div style={{width:'85%',margin:'auto'}} >
                        <div class="item" >
                            <div class="thumb" >
                                <img class="img-fluid" src={item.image} alt="Thumb"/>
                                <div class="overlay">
                                    <h4 style={{fontFamily:'helvetica'}}>{item.name}</h4>
                                    <p>
                                        {item.job}
                                    </p>
                                    {/* <div class="social">
                                        <ul>
                                            <li class="twitter">
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li class="pinterest">
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                            </li>
                                            <li class="instagram">
                                                <a href="#"><i class="fab fa-instagram"></i></a>
                                            </li>
                                            <li class="vimeo">
                                                <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="#"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4 style={{fontFamily:'helvetica'}}>{item.name}</h4>
                                
                            </div>
                        </div>
                    </div>
                    </section>
                {/* </div> */}
                
          </Grid>

            ))
            
        }
    </Grid>
    </div>
    <Footer/>
    </>
  )
}

export default Speaker