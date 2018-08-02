import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Root from './components/Root';
import {I18nextProvider} from 'react-i18next';
import i18n from './translations/i18n';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Root store={store} />
    </I18nextProvider>, document.getElementById('root'));
registerServiceWorker();
