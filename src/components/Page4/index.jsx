import React from 'react'
import './style.scss'
import Image16 from '../../acsess/Филиалы.png'
import Image17 from '../../acsess/mon.png.png'
import Image18 from '../../acsess/testcenter.png.png'
import Image19 from '../../acsess/logo_osnovnoj_czvetnoj.png (2).png'
import Image20 from '../../acsess/prometric.png.png'
import Image21 from '../../acsess/cambridge.jpg.png'
import Image22 from '../../acsess/britishcouncil-2048x588.png.png'

function Page4() {
  return (
 <section id='icon'>
    <h1>Мы центр тестирования U-STUDY</h1>
    <div className='couresss'>
        <div className='Cd'>
            <p>Сеть UStudy состоит из 56 региональных центров тестирования, расположенных в 3 городах республиканского значения, 14 областных центрах, районных центрах и моногородах Республики Казахстан. Общее количество посадочных мест составляет 6 320 единиц. На создание сети инфраструктуры было привлечено более 8 млрд. тенге частных инвестиции. </p>
        </div>
        <img className='Cdd' src={Image16}/>
    </div>
    <div className='Icons'>
        <img src={Image17} />
        <img src={Image18} />
        <img src={Image19} />
        <img src={Image20} />
        <img src={Image21} />
        <img src={Image22} />
    </div>
 </section>
  )
}

export default Page4