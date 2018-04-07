import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = React.createElement('h1', {}, 'My First React Code');

ReactDOM.render(
    title,
    document.getElementById('root')
);

registerServiceWorker();
