import { createContext, useState } from "react";


const LanguageContext = createContext();

const LanguageProvider = ({children})=>{

    const [lang, setLang] = useState('en');


    const dataTranslator = {
        en: {
            title: 'Welcome to the world of React',
            greeting:'Hello World!',
            welcome:'Welcome to my app.'
        },
        hi: {
            title: 'React के जगत में आपका स्वागत है',
            greeting:'नमस्ते दुनिया!',
            welcome:'मेरे ऐप में आपका स्वागत है।'
        },
        es:{
            title: 'Bienvenido al mundo de React',
            greeting:'¡Hola Mundo!',
            welcome:'Bienvenido a mi aplicación.'
        },
        ja: {
            title: 'Reactの世界へようこそ',
            greeting:'こんにちは世界！',
            welcome:'私のアプリへようこそ。'
        },
    };

    

    const translate = (key) => {
            return dataTranslator[lang];
    }

    return (
        <LanguageContext.Provider value={{lang, setLang, translate}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, LanguageProvider};