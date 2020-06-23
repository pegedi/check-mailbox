import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from'./AppBar';
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import OriginalCRApp from './OriginalCRApp';
import CustomizedTables from './Table';

const tableData = [ ['1 Tél', 'Hóvirág', 'Fehér'],
                    ['2 Tavasz', 'Orgona', 'Lila'],
                    ['3 Nyár', 'Napraforgó', 'Sárga'],
                    ['4 Ősz', 'Őszirózsa', 'Piros']];
const tableHeaders = ['Évszak', 'Virág', 'Szín'];

function App() {
  
  return (
    <>
        <CssBaseline/>
        <ButtonAppBar />
        <Box m={15}>
        <CustomizedTables />
        </Box>
    </>
  );
}

export default App;
