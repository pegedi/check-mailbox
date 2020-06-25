import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  table: {
  //  minWidth: '700',
  },
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    position: 'sticky',
    top: '64px',

  //  marginTop: '10px',
    zIndex: '10', 
  },
  root: {
    width: '100%',
 //   width: 'auto', 
    display: 'table',
    margin: '0px',
 //   overflowX: 'auto',
  },

}));

export default function CustomizedTables({headerCells, dataRows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="customized table" >
        <TableHead >
          <TableRow key="-1">
            {headerCells.map((item, itemIndex) => (<TableCell key={"header/" + itemIndex} 
                className={classes.head} align={item.align}>
                {item.fieldName} </TableCell>))}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((row, rowIndex) => (
            <TableRow key={"ROW/" + rowIndex}>
              <TableCell key={rowIndex+"/1"} component="th" scope="row">
                {row.reportName}
              </TableCell>
              <TableCell key={rowIndex+"/2"}  align="left">{row.subject}</TableCell>
              <TableCell key={rowIndex+"/3"} align="left">{row.requestID}</TableCell>
              <TableCell key={rowIndex+"/4"} align="left">{row.linkString}</TableCell>
              <TableCell key={rowIndex+"/5"} align="left">{row.requestID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}