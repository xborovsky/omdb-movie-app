import React from 'react';
import { translate } from 'react-i18next';

const Header = ({t}) =>
    <div className="jumbotron">
        <h1 className="text-center">{t('jumbotron.heading')}</h1>
    </div>
;

export default translate('translations')(Header);