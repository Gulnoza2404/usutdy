import React from 'react'
import './style.scss'
import Image5 from '../../acsess/Group 39554 (2).png'
import Image6 from '../../acsess/Group 39554 (3).png'
import Image7 from '../../acsess/Group 39554 (4).png'
import Image8 from '../../acsess/Group 39555.png'

function Page1() {
  return (
    <section id="futures">
    <h1>Наши преимущества</h1>

    <div class="fass">
    <div class="fas">
        < img src={Image5} />
        <p>Безлимитный пробный доступ
        к тестам</p>
    </div>
    <div class="fas">
        <img src={Image6} />
        <p>Доступ к материалам
        24/7</p>
    </div>
    <div class="fas">
        <img src={Image7} />
        <p>Практика на базе актуальных вопросов ЕНТ</p>
    </div>
    <div class="fas">
        <img src={Image8} />
        <p>Бонусы при приобретении пакета</p>
    </div>
</div>

</section>
  )
}

export default Page1