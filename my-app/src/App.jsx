import React, { useEffect, useState } from 'react';
import { Converter } from './components/Converter';
import { Header } from './components/Header';
import './styles';

const date = new Date().toLocaleDateString().split('.').reverse().join('');
const getCurrency = (code, setCode) => {
  fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${code}&date=${date}&json`
  )
    .then((result) => result.json())
    .then((result) => setCode(result[0].rate))
    .catch((error) => console.log('error', error));
};

const App = () => {
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    getCurrency('usd', setUsd);
    getCurrency('eur', setEur);
  }, []);

  return (
    <div className="App">
      <Header usd={usd} eur={eur} />
      <Converter usd={usd} eur={eur} />
    </div>
  );
};

export default App;
