import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {

    const [argument, setArgument] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

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

        console.log(message)

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })

    }


    return (
        <form onSubmit={e => onSubmit(e)}>
            <div className={'yes-or-no'}>
                <h3>Чи цікаво було б вам прийти на консультацію?</h3>
                <input type="radio" value="Yes" onChange={e => handleChangeYesNo(e)} name="yes_or_no" /> Yes
                <input type="radio" value="No" onChange={e => handleChangeYesNo(e)} name="yes_or_no" /> No
            </div>
            <div className={'what-time'}>
                <h3>Напишіть в який час зручно буде прийняти наш дзвінок?</h3>
                <input type="radio" value="11-12" onChange={e => handleChangeWhatTime(e)} name="what-time" /> 11-12 AM
                <input type="radio" value="12-14" onChange={e => handleChangeWhatTime(e)} name="what-time" /> 12-14 AM
            </div>
            <div className={'what-time'}>
                <input type="name" placeholder={"Напишіть ваш ім'я"} value={name} onChange={e => handleChangeValueName(e)} name="name" />
                <input type="email" placeholder={"Напишіть ваш номер телефону"} value={mail} onChange={e => handleChangeValueMail(e)} name="mail" />
            </div>
            <button type={'submit'}>Send</button>
        </form>
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
