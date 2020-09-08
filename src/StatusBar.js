import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
 
}));

export default function StatusBar(props) {
  const classes = useStyles();

  return (
    
      <React.Fragment>

      <AppBar position="fixed" color="primary" className={classes.appBar}>

        <Toolbar className={classes.toolBar} >
            <Typography variant="body2" >
              {props.message1}
            </Typography>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );
}