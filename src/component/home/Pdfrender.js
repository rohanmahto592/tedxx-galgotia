import React from 'react'
import pdf from '../images/event.pdf'
const Pdfrender = () => {
  return (
    <div style={{width:'100%',height:'100vh',position:'relative',top:'20%'}}>
        <embed src={pdf} width="800px" height="2100px" />
    </div>
  )
}

export default Pdfrender