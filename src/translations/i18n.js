import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import cz from './cz.json';
import sk from './sk.json';

i18n.use(LanguageDetector)
    .init({
        interpolation : {
            escapeValue : false,
            formatSeparator : ','
        },
        fallbackLng : 'en',
        resources: {
            en: {
                translations: en
            },
            cz: {
                translations: cz
            },
            sk: {
                translations: sk
            }
        },
        ns: ['translations'],
        defaultNS: 'translations',
        react : {
            wait : true
        }
    });

export default i18n;