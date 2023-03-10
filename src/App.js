import './App.scss';
import { useRef, useState} from "react";
import axios from "axios";
function App() {

    const [isSend, setIsSend] = useState(false);
    const [time, setTime] = useState();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [city, setCity] = useState('');
    const radioCheckedTimeFirst = useRef(null)
    const radioCheckedTimeSecond = useRef(null)

    const TOKEN = `5933738226:AAHWvvaqOo8m9zgI3AeXiM9cYBqM7QAMeSI`
    const CHAT_ID = '-1001502848599'
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


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
        event.preventDefault();

        let message = `Имя: ${name}, Телефон: ${mail}, Страна: ${city}, Время: ${time}`

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
            disable_notification: true
        }).then(res => {
            radioCheckedTimeFirst.current.checked = false
            radioCheckedTimeSecond.current.checked = false
            setName('')
            setMail('')
            setCity('')
            setIsSend(true)
        }).catch((err) => {
            alert('Что-то пошло не так, попробуйте позже')
            console.warn(err)
        }).finally(() => {
            setTimeout(() => {
                setIsSend(false)
            }, 2500)
        })

    }

    const handleClickScroll = () => {
        const form = document.getElementById('section-form');
        if (form) {
            form.scrollIntoView({behavior: "smooth"})
        }
    }


    return (
        <>
            <div className="section-main">
                <div className="container">
                    <div className="main-wrapper">
                        <div className="main-left">
                            <h1>Здесь будет какой-то текст</h1>
                            <p>Расскройте все ваши тайны вместе с потомственными ясновидящими в третьем поколении уже сегодня</p>
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
                                    <h2>Хаял Алекперов</h2>
                                    <p>Потомственный ясновидящий и екстрасенс с уникальным даром от Бога</p>
                                </div>
                                <div className="experts-item">
                                    <div className="experts-item-image image-second"></div>
                                    <h2>Хаял Алекперов</h2>
                                    <p>Потомственный ясновидящий и екстрасенс с уникальным даром от Бога</p>
                                </div>
                                <div className="experts-item">
                                    <div className="experts-item-image image-third"></div>
                                    <h2>Хаял Алекперов</h2>
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
                                <h3>В какое время вам удобно принять наш звонок?</h3>
                            </div>
                            <div className={'what-time'}>
                                <div className={'what-time-first'}>
                                    <input ref={radioCheckedTimeFirst} type="radio" value="11-12" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'} />
                                    <label htmlFor="radio">11-12 AM</label>
                                </div>
                                <div className={'what-time-second'}>
                                    <input ref={radioCheckedTimeSecond} type="radio" value="12-14" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'}/>
                                    <label htmlFor="radio">12-14 PM</label>
                                </div>

                            </div>

                            <button type={'submit'}>{isSend ? 'Данные успешно отправлены, ожидайте на звонок!' : 'Отправить данные'}</button>
                        </form>
                        <div className="form-right-image">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App;
