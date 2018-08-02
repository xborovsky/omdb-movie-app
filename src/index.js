import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Root from './components/Root';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
