import React, { useState } from 'react';
import './App.css';
import ButtonAppBar from'./AppBar';
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomizedTables from './Table';
import jsonp from './jsonp';
import downloadfile2 from './downloadToFile';

const queryURL='https://script.google.com/macros/s/AKfycbzNEIVgweOKPUyS9rjAOePMG2fTcKy1YIj0V8cI_VpMTGQLuA3-/exec?query=label:orareport';
const queryDEVURL='https://script.google.com/macros/s/AKfycbymuFfnEq2Rw-KSq93_3u4qpKnFiOhQMn-uY2_3IdMo/dev?query=label:orareport';

const headerCells = [{fieldName: "Report Name", align: "left"},
                {fieldName: "Subject", align: "left"},
                {fieldName: "Request ID", align: "left"},
                {fieldName: "Link", align: "left"},
                {fieldName: "ThreadID", align: "left"},]

function App() {
  const inquiryPressed = (event) => {
    console.log('Refresh Started!');

    jsonp(queryDEVURL, response => {setDataRows(response)});
 
  };
  
  const downloadBtnClicked = (event) => {
    console.log("buttonClicked function started");
    let fileText = "Request ID|Subject|Report Name|Link\r\n";
    for (let dataRow of dataRows) {
    fileText += dataRow.requestID + "|" + dataRow.subject + "|" + dataRow.reportName + "|" + dataRow.linkString +"\r\n";          
    }

    downloadfile2("emailDetails.txt",fileText);
//    $('#progress').html("File Downloaded");

    event.stopPropagation();
    }
  const [dataRows, setDataRows] = useState([]);

  
  return (
    <>
        <CssBaseline/>
        <ButtonAppBar 
            inquiryPressed={inquiryPressed}
            downloadBtnClicked={downloadBtnClicked}
        />

        <Box m='20px' mt='80px'>
           <CustomizedTables 
                headerCells={headerCells} 
                dataRows={dataRows}/>
        </Box>
    </>
  );
}

export default App;
