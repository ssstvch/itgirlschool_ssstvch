import React from 'react';
import '../styles/header.scss';

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header__title">Рейтинг супергероев</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;