import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from'./AppBar';
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import OriginalCRApp from './OriginalCRApp';

const tableData = [ ['1 Tél', 'Hóvirág', 'Fehér'],
                    ['2 Tavasz', 'Orgona', 'Lila'],
                    ['3 Nyár', 'Napraforgó', 'Sárga'],
                    ['4 Ősz', 'Őszirózsa', 'Piros']]
function App() {
  return (
    <>
        <CssBaseline/>
        <ButtonAppBar />
        <OriginalCRApp />
        
    </>
  );
}

export default App;
