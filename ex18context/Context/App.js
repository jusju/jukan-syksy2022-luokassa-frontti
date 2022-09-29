import React from 'react';
import ThemeContext from './ThemeContext';
import Header from './Header';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  return (
    <ThemeContext.Provider value={buttonThemes.black}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
