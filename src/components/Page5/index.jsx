import React from 'react'
import './style.scss'
import  Image23 from '../../acsess/Frame 41232.png'
import  Image24 from '../../acsess/Frame 41231.png'
import  Image25 from '../../acsess/Frame 41230.png'
import  Image26 from '../../acsess/Frame 41229.png'
function Page5() {
  return (
<section id='Map'>
    <h1>Контакты</h1>
    <div className='Js'>
        <div className='ICON'>
            <img src={Image23} />
            <img src={Image24} />
            <img src={Image25} />
            <img src={Image26} />

        </div>
        <div className='Texts'>
            <p>г. Астана, ул. Алматы, 7, офис 804</p>
            <p>г. Астана, ул. Алматы, 7, офис 804</p>
            <p>г. Астана, ул. Алматы, 7, офис 804</p>
            <p>г. Астана, ул. Алматы, 7, офис 804</p>

        </div>
        
         <p className='mapp'>

        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5257224738853!2d71.4200372762089!3d51.117210171727265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245843caa221dff%3A0xb85352c81a99883c!2z0YPQuy4g0JDQu9C80LDRgtGLIDcsINCQ0YHRgtCw0L3QsCAwMjAwMDAsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1725776811582!5m2!1sru!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </p>
    </div> 
    </section>
  )
}

export default Page5