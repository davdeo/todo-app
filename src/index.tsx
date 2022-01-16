import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles';

import { App } from './views/app';

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
