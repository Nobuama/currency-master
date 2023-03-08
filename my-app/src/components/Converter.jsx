import {
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

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
    } else if (inp != 1 && outp != 1) {
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
        <FormControl sx={{ width: 200 }}>
          <Select
            onChange={(e) => setInputCurrency(e.target.value)}
            displayEmpty
            value={inputCurrency}
          >
            <MenuItem value={usd}>USD</MenuItem>
            <MenuItem value={eur}>EUR</MenuItem>
            <MenuItem value={1}>UAH</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <Select
            displayEmpty
            onChange={(e) => setOutputCurrency(e.target.value)}
            value={outputCurrency}
          >
            <MenuItem value={usd}>USD</MenuItem>
            <MenuItem value={eur}>EUR</MenuItem>
            <MenuItem value={1}>UAH</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        placeholder="Result"
        value={calc(inputCurrency, outputCurrency)}
      />
    </Container>
  );
};
