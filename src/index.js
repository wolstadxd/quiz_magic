import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './fonts/TTFirsNeue-DemiBold.ttf'
import './fonts/TTFirsNeue-Medium.ttf'
import './fonts/TTFirsNeue-Regular.ttf'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);
