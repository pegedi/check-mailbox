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

const headerCells = [{fieldName: "Dessert (100g serving)", align: "left"},
                {fieldName: "Calories", align: "right"},
                {fieldName: "Fat", align: "right"},
                {fieldName: "Carbs", align: "right"},
                {fieldName: "Protein", align: "right"},]

function App() {
  let appBarHeight = 0;
  
  return (
    <>
        <CssBaseline/>
        <ButtonAppBar />

        <Box m='20px' mt='80px'>
           <CustomizedTables headerCells={headerCells} />
        </Box>
    </>
  );
}

export default App;
