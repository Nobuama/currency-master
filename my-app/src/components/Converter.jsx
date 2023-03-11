import { Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ChooseCurrency } from './ChooseCurrency';

export const Converter = ({ usd, eur }) => {
  const [inputCurrency, setInputCurrency] = useState(1);
  const [outputCurrency, setOutputCurrency] = useState(usd);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setOutputCurrency(usd);
  }, [usd]);

  const calc = (inp, outp) => {
    if (inp === 1) {
      return amount / outp;
    } else if (inp !== 1 && outp !== 1) {
      return (amount * inp) / outp;
    } else if (outp === 1) {
      return amount * inp * outp;
    }
  };

  return (
    <Container className="form" sx={{ display: 'flex', width: 500 }}>
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="select-wrapper">
        <ChooseCurrency
          name={'From'}
          usd={usd}
          eur={eur}
          func={setInputCurrency}
          value={inputCurrency}
        />
        <ChooseCurrency
          name={'To'}
          usd={usd}
          eur={eur}
          func={setOutputCurrency}
          value={outputCurrency}
        />
      </div>
      <TextField label="Result" value={calc(inputCurrency, outputCurrency)} />
    </Container>
  );
};
