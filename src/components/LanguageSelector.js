import React, {Component} from 'react';
import { storageManager, LANGUAGE }from '../utils/storage-manager';
import { translate } from 'react-i18next';

class LanguageSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language : storageManager.getFromSessionStorage(LANGUAGE) || 'en'
        };
    }

    onLanguageChange = (e) => {
        const val = e.target.value;
        this.props.i18n.changeLanguage(val);
        storageManager.setToSessionStorage(LANGUAGE, val);
        this.setState({language : val});
    }

    render() {
        const { language } = this.state;

        return (
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 offset-sm-6 offset-md-9">
                    <select onChange={this.onLanguageChange} value={language} className="form-control language-select">
                        <option value="en">English</option>
                        <option value="cz">Čeština</option>
                        <option value="sk">Slovenčina</option>
                    </select>
                </div>
            </div>
        );
    }

}

export default translate('translations')(LanguageSelector);