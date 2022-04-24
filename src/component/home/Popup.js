import React from "react";
import "./popup.css" 
import ReactPlayer from 'react-player/youtube'
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
      <ReactPlayer loop={true} controls={true} width={'100%'} url="https://youtu.be/d0NHOpeczUU"/>
       
      </div>
    </div>
  );
};
 
export default Popup;