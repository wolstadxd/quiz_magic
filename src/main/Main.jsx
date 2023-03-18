import React, {useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../App.scss';
import {Helmet} from "react-helmet";
import axios from "axios";

const Main = () => {

    const [time, setTime] = useState();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [city, setCity] = useState('');
    const radioCheckedTimeFirst = useRef(null)
    const radioCheckedTimeSecond = useRef(null)
    const radioCheckedTimeThird = useRef(null)

    const TOKEN = `5933738226:AAHWvvaqOo8m9zgI3AeXiM9cYBqM7QAMeSI`
    const CHAT_ID = '-1001502848599'
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    const navigate = useNavigate()

    const handleChangeWhatTime = (event) => {
        setTime(event.target.value)
    }

    const handleChangeValueName = (e) => {
        setName(e.target.value)
    }

    const handleChangeValueMail = (e) => {
        setMail(e.target.value)
    }

    const handleChangeValueCity = (e) => {
        setCity(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        let message = `Имя: ${name}, Телефон: ${mail}, Страна: ${city}, Время: ${time}`

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
            disable_notification: true

        }).then(res => {
            // pixel[1].innerHTML = ''
            radioCheckedTimeFirst.current.checked = false
            radioCheckedTimeSecond.current.checked = false
            radioCheckedTimeThird.current.checked = false
            setName('')
            setMail('')
            setCity('')
        }).catch((err) => {
            alert('Что-то пошло не так, попробуйте позже')
            console.warn(err)
        }).finally(() => {
            navigate('/thank-you')
            window.location.reload();
        })
    }

    const handleClickScroll = () => {
        const form = document.getElementById('section-form');
        if (form) {
            form.scrollIntoView({behavior: "smooth"})
        }
    }


    return (
        <div className={'Main'}>
            <Helmet>
                <script>
                    {`<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '155100287421358');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=155100287421358&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`}
                </script>
            </Helmet>
            <div className="section-main">
                <div className="container">
                    <div className="main-wrapper">
                        <div className="main-left">
                            <h1>Мы можем снять магическое воздействие за ОДНИ СУТКИ!</h1>
                            <p>Раскройте все ваши тайны вместе с потомственными ясновидящими уже сегодня.</p>
                            <button onClick={handleClickScroll}>
                                Оставить заявку
                                <div></div>
                            </button>
                        </div>
                        <div className="main-right">
                            <h1>Наши експерты</h1>
                            <div className="experts-block">
                                <div className="experts-item">
                                    <div className="experts-item-image image-first"></div>
                                    <h2>Сулейман Муслимов</h2>
                                    <p>Целитель в 4 поколении, занимается чисткой ауры, порчи, сглаз, родовые порчи.</p>
                                </div>
                                <div className="experts-item">
                                    <div className="experts-item-image image-second"></div>
                                    <h2>Александр Шепс</h2>
                                    <p>Экстрасенс, таролог, победитель 14-го сезона «Битвы экстрасенсов»</p>
                                </div>
                                <div className="experts-item">
                                    <div className="experts-item-image image-third"></div>
                                    <h2>Сулейман Муслимов</h2>
                                    <p>Потомственный ясновидящий и екстрасенс с уникальным даром от Бога</p>
                                </div>
                            </div>
                            <div className="skill-block">
                                <div className="skill-item">
                                    <div className="skill-item-image image-skill-first"></div>
                                    <p>Карты Таро могут предоставить понимание и указания относительно сфер нашей жизни, о которых мы можем не полностью осознавать или с которыми боремся. Архетипические образы, изображенные на картах, могут отражать самые сокровенные желания, страхи и стремления.</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-item-image image-skill-second"></div>
                                    <p>Гадание – это увлекательная и древняя практика, которая предлагает понимание, руководство и более глубокое понимание себя и мира вокруг нас, также это способность проникать в подсознание и раскрывать скрытые истины и идеи.</p>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-item-image image-skill-third"></div>
                                    <p>Исцеление – это процесс восстановления физического, умственного, эмоционального или духовного благополучия. Это сложная и многомерная концепция, которая может включать в себя различные подходы, включая медицинское лечение, альтернативную терапию и духовные практики.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-form" id={'section-form'}>
                <div className="container">
                    <div className="form-wrapper">
                        <form onSubmit={e => onSubmit(e)}>
                            <div className={'name-number'}>
                                <h1>Оставьте заявку на консультацию</h1>
                                <input type="name" placeholder={"Ваше имя"} required={true} value={name} onChange={e => handleChangeValueName(e)} name="name"/>
                                <input type="number" placeholder={"Ваш номер телефона"} required={true} value={mail} onChange={e => handleChangeValueMail(e)} name="mail" />
                                <input type="text" placeholder={"В какой стране вы сейчас?"} required={true} value={city} onChange={e => handleChangeValueCity(e)} name="text" />
                                <h3>В какое время Вам удобно принять наш звонок?</h3>
                            </div>
                            <div className={'what-time'}>
                                <div className={'what-time-first'}>
                                    <input ref={radioCheckedTimeFirst} type="radio" value="09:00 - 12:00" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'} />
                                    <label htmlFor="radio">09:00 - 12:00</label>
                                </div>
                                <div className={'what-time-second'}>
                                    <input ref={radioCheckedTimeSecond} type="radio" value="13:00 - 17:00" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'}/>
                                    <label htmlFor="radio">13:00 - 17:00</label>
                                </div>
                                <div className={'what-time-second'}>
                                    <input ref={radioCheckedTimeThird} type="radio" value="18:00 - 20:00" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'}/>
                                    <label htmlFor="radio">18:00 - 20:00</label>
                                </div>
                            </div>
                            <button type={'submit'} >Отправить данные</button>
                        </form>
                        <div className="form-right-image">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main