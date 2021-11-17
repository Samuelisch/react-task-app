import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  body {
    backgorund: rgb(240, 240, 240);
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const App = () => {
  return (
    <div className="main">
      <GlobalStyle />
      <h1>Simple Task Tracker</h1>
      <Main />
    </div>
  );
}

export default App;
