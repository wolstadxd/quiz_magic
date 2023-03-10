import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './fonts/TTFirsNeue-DemiBold.ttf'
import './fonts/TTFirsNeue-Medium.ttf'
import './fonts/TTFirsNeue-Regular.ttf'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
