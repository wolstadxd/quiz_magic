import './App.scss';
import { useRef, useState} from "react";
import axios from "axios";
function App() {

    const [argument, setArgument] = useState();
    // const [isChecked, setIsChecked] = useState(false);
    const [time, setTime] = useState();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const radioCheckedYes = useRef(null)
    const radioCheckedNo = useRef(null)
    const radioCheckedTimeFirst = useRef(null)
    const radioCheckedTimeSecond = useRef(null)

    const TOKEN = `5933738226:AAHWvvaqOo8m9zgI3AeXiM9cYBqM7QAMeSI`
    const CHAT_ID = '-1001502848599'
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


    const handleChangeYesNo = (event) => {
        setArgument(event.target.value)
    }

    const handleChangeWhatTime = (event) => {
        setTime(event.target.value)
    }

    const handleChangeValueName = (e) => {
        setName(e.target.value)
    }

    const handleChangeValueMail = (e) => {
        setMail(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        let message = `Ответ да или нет:  `
        message += `${argument}, time: ${time}`
        message += `Name: ${name}, Mail: ${mail}`



        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
            disable_notification: true
        }).then(res => {
            // radioCheckedYes.current.checked = false
            // radioCheckedNo.current.checked = false
            radioCheckedTimeFirst.current.checked = false
            radioCheckedTimeSecond.current.checked = false
            setName('')
            setMail('')
        }).catch((err) => {
            console.warn(err)
        }).finally(() => {
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
                                <input type="name" placeholder={"Ваше имя"} value={name} onChange={e => handleChangeValueName(e)} name="name"/>
                                <input type="number" placeholder={"Ваш номер телефона"} value={mail} onChange={e => handleChangeValueMail(e)} name="mail" />
                                <h3>В какое время вам удобно принять наш звонок?</h3>
                            </div>
                            <div className={'what-time'}>
                                <div className={'what-time-first'}>
                                    <input ref={radioCheckedTimeFirst} type="radio" value="11-12" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'} />
                                    <label htmlFor="radio">11-12 AM</label>
                                </div>
                                <div className={'what-time-second'}>
                                    <input ref={radioCheckedTimeSecond} type="radio" value="12-14" onChange={e => handleChangeWhatTime(e)} name="what-time" id={'radio'}/>
                                    <label htmlFor="radio">12-14 AM</label>
                                </div>

                            </div>

                            {/*<div className={'yes-or-no'}>*/}
                            {/*    <h3>Чи цікаво було б вам прийти на консультацію?</h3>*/}
                            {/*    <input ref={radioCheckedYes} type="radio" value="Yes" onChange={e => handleChangeYesNo(e)} name="yes_or_no" id={'radio'}/> Yes*/}
                            {/*    <input ref={radioCheckedNo} type="radio" value="No" onChange={e => handleChangeYesNo(e)} name="yes_or_no" id={'radio'} /> No*/}
                            {/*</div>*/}

                            <button type={'submit'}>Отправить данные</button>
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

// const questions = [
//     {
//         questionText: 'Столица США?',
//         answerOptions: [
//             {answerText: 'Boston', isCorrect: false},
//             {answerText: 'Washington', isCorrect: true},
//             {answerText: 'NueYork', isCorrect: false},
//             {answerText: 'Los-Angeles', isCorrect: false}
//         ]
//     },
//     {
//         questionText: 'Столица США?',
//         answerOptions: [
//             {answerText: 'Boston', isCorrect: false},
//             {answerText: 'Washington', isCorrect: true},
//             {answerText: 'NueYork', isCorrect: false},
//             {answerText: 'Los-Angeles', isCorrect: false}
//         ]
//     },
//     {
//         questionText: 'Столица США?',
//         answerOptions: [
//             {answerText: 'Boston', isCorrect: false},
//             {answerText: 'Washington', isCorrect: true},
//             {answerText: 'NueYork', isCorrect: false},
//             {answerText: 'Los-Angeles', isCorrect: false}
//         ]
//     },
//     {
//         questionText: 'Столица США?',
//         answerOptions: [
//             {answerText: 'Boston', isCorrect: false},
//             {answerText: 'Washington', isCorrect: true},
//             {answerText: 'NueYork', isCorrect: false},
//             {answerText: 'Los-Angeles', isCorrect: false}
//         ]
//     },
// ]
//
// const [currentQuestion, setCurrentQuestion] = useState(0)
// const [score, setScore] = useState(0)
// const [showScore, setShowScore] = useState(false)
//
// const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//         setScore(score + 1)
//     }
//
//     const nextQuestion = currentQuestion + 1
//     if (nextQuestion < questions.length) {
//         setCurrentQuestion(nextQuestion)
//     } else {
//         setShowScore(true)
//     }
// }
//
// const refresh = () => {
//     setCurrentQuestion(0)
//     setScore(0)
//     setShowScore(false)
// }
//
// return (
//     <div className="app">
//
//
//         {
//             showScore ? (<div className="section__score">
//                 <div>Правильных ответов {score} из {questions.length}</div>
//                 <button onClick={refresh} className={'refresh__btn'}>Try again...</button>
//             </div>) : (
//                 <div className="quiz">
//                     <div className="question__section">
//                         <div className="question__count">
//                             <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
//                         </div>
//                         <div className="question__text">{questions[currentQuestion].questionText}</div>
//                     </div>
//                     <div className="answer__section">
//                         {questions[currentQuestion].answerOptions.map(item => (
//                             <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
//                         ))}
//                     </div>
//                 </div>
//             )
//         }
//
//
//     </div>
// );
