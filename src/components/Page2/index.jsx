import React from 'react'
import './style.scss'
import Image9 from '../../acsess/Calculator.png'
import Image10 from '../../acsess/TextAa.png'
import Image11 from '../../acsess/MapTrifold.png'
import Image12 from '../../acsess/Calendar.png'
import Image13 from '../../acsess/LockKeyOpen.png'
import Image14 from '../../acsess/Wrench.png'

function Page2() {
  return (
    <section id='kurs'>
        <h1>Про курс</h1>
        <div className='course'>
            <div className='courses'>
                <p>Мы предлагаем различные форматы подготовки: от самостоятельного изучения материалов и видеоуроков до регулярных групповых занятий с педагогами</p>


            </div>
            <div className='GMM'>
            <p className='Gmmm'>Обязательные предметы</p>
            <div className='Courses'>
                
                <img src={Image9} />
                <p>Математическая грамотность</p>
                <img src={Image9} />
                <p>Математическая грамотность</p>
                <img src={Image9} />
                <p>Математическая грамотность</p>

                

            </div>
            <p>Обязательные предметы</p>
            <div className='Courses'>
                
                <img src={Image9} />
                <p>Математическая грамотность</p>
                <img src={Image9} />
                <p>Математическая грамотность</p>
                <img src={Image9} />
                <p>Математическая грамотность</p>

                

            </div>
        </div>
        </div>

    </section>
  )
}

export default Page2