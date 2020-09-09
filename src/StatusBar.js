import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
 
  appBar: {
    top: 'auto',
    bottom: 0,
    minHeight: 0,
  },
  toolBar: {
      height: 'auto',
      minHeight: 0,
  },
  statusText: {
      fontSize: 10,
  },
  statusBox: {
      background: '#7777ff',
      fontSize: '12px',
      margin: '10px',
      padding: '2px 10px',
      display: 'inline',
  }
 
}));

export default function StatusBar(props) {
  const classes = useStyles();

  return (
    
      <React.Fragment>

      <AppBar position="fixed" color="primary" className={classes.appBar}>

        <Toolbar className={classes.toolBar} >
            <Typography variant="subtitle" >
                <Box className={classes.statusBox}> 
                    {props.message1}
                </Box>
                {props.message2?<Box className={classes.statusBox}>{props.message2}</Box>:<></>}
            </Typography>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );
}