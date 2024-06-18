import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import stanowiska_ from '../../translations/stanowiska2.json';

const resources = {
    en: {
        translation: {
            stanowiska: stanowiska_
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources: stanowiska_,
        lng: 'pl',
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
