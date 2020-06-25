//https://codesandbox.io/s/j3j31qvq2v

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined'; 
import jsonp from './jsonp';

const queryURL='https://script.google.com/macros/s/AKfycbzNEIVgweOKPUyS9rjAOePMG2fTcKy1YIj0V8cI_VpMTGQLuA3-/exec?query=label:orareport';
const queryDEV='https://script.google.com/macros/s/AKfycbymuFfnEq2Rw-KSq93_3u4qpKnFiOhQMn-uY2_3IdMo/dev?query=label:orareport';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const handleClick = (event) => {
    console.log('Refresh Started!');

    jsonp(queryDEV, response => console.log(response));
 
  }; 



  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="refresh"
              onClick={handleClick} >
            <RefreshIcon />
          </IconButton>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="info" >
            <InfoOutlinedIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Oracle Reports
          </Typography>
          <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CloudDownloadOutlinedIcon />}
          >
            
            Download
          </Button>
        </Toolbar>
      </AppBar>


    </div>
  );
}
