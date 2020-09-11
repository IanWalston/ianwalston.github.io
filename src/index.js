import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import developerInfo from "../data/info.json";

ReactDOM.render(<App developerInfo={developerInfo} />, document.getElementById('app'));
