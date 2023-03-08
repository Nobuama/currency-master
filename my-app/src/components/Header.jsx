import React from 'react';

export const Header = ({ usd, eur }) => {
  return (
    <header className="header">
      <h2 className="header__course">USD: {usd}</h2>
      <h2 className="header__course">EUR: {eur}</h2>
    </header>
  );
};
