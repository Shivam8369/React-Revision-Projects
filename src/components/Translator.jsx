import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';

const Translator = () => {
  const { lang, setLang, translate } = useContext(LanguageContext);
  const [translateData, setTranslateData] = useState({
    title: 'Welcome to the world of React',
    greeting: 'Hello World!',
    welcome: 'Welcome to my app.',
  });

  const handleLanguage = (language) => {
    setLang(language);
  };

  useEffect(() => {
    setTranslateData(translate(lang));
  }, [lang, translate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> <i>Translator Component </i> </h1>

      <h2>{translateData?.title}</h2>
      <h2>{translateData?.greeting}</h2>
      <h2>{translateData?.welcome}</h2>

      <button onClick={() => handleLanguage('en')}>English</button>
      <button onClick={() => handleLanguage('hi')}>Hindi</button>
      <button onClick={() => handleLanguage('es')}>French</button>
      <button onClick={() => handleLanguage('ja')}>Japanese</button>
    </div>
  );
};

export default Translator;
