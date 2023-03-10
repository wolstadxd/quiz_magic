import './App.scss';
import ThankYou from "./ThankYou/ThankYou";
import {Routes, Route} from "react-router-dom";
import Main from "./main/Main";

function App() {




    return (
        <>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/thank-you"} element={<ThankYou />} />
            </Routes>
        </>
    )
}

export default App;
