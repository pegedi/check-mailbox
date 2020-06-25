import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const headerCells = [{fieldName: "Dessert (100g serving)", align: "left"},
                {fieldName: "Calories", align: "right"},
                {fieldName: "Fat", align: "right"},
                {fieldName: "Carbs", align: "right"},
                {fieldName: "Protein", align: "right"},]
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

export default function CustomizedTables() {
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
          {rows.map((row, rowIndex) => (
            <TableRow key={row.name}>
              <TableCell key={rowIndex+"/1"} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell key={rowIndex+"/2"}  align="right">{row.calories}</TableCell>
              <TableCell key={rowIndex+"/3"} align="right">{row.fat}</TableCell>
              <TableCell key={rowIndex+"/4"} align="right">{row.carbs}</TableCell>
              <TableCell key={rowIndex+"/5"} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}