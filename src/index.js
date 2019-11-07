import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/index';
import GpGrid from './updates/Dashboard.js';
import GpNav from './updates/gpNav';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(   <React.Fragment><GpGrid /><GpNav/></React.Fragment> , document.getElementById('root'));
ReactDOM.render(   <App/>, document.getElementById('root'));
serviceWorker.unregister();
