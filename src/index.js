import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import developerInfo from "../data/info.json";
import regeneratorRuntime from "regenerator-runtime";


ReactDOM.render(<App developerInfo={developerInfo} />, document.getElementById('app'));

