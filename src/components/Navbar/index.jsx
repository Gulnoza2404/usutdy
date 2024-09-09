import React from 'react'
import './style.scss'
import Image1 from "../../acsess/Ustudy_logo 1 (1).png"
import Image2 from "../../acsess/TelegramLogo.png"
import Image3 from "../../acsess/WhatsappLogo.png"
import Image4 from "../../acsess/Frame 3.png"


function Navbar() {
  return (
    <>
     <nav>
       <img  className='GM' src={Image1} />
        <div className='navigation'>
            <ul>
               <p className='number'>+7 (700) 202 94 05</p>
               <img src={Image2} />
               <img src={Image3} />
               <img src={Image4} />
               
               
            </ul>

        </div>
    </nav>
    
    </>
  )
}

export default Navbar