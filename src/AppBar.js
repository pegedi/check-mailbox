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

export default function ButtonAppBar({inquiryPressed, downloadBtnClicked, loginClicked, userName}) {
  const classes = useStyles();
  const loginBtnText = userName ? 'Logout' : 'Login';
  console.log('function ButtonAppBar: ');
  console.log(userName);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="refresh"
              onClick={inquiryPressed} >
            <RefreshIcon />
          </IconButton>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="info" >
            <InfoOutlinedIcon />
          </IconButton>
          <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={loginClicked}
          >
            {loginBtnText}
          </Button>

          <Typography variant="h6" className={classes.title}>
            Oracle Reports
          </Typography>
          <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CloudDownloadOutlinedIcon />}
            onClick={downloadBtnClicked}
          >
            
            Download
          </Button>
        </Toolbar>
      </AppBar>


    </div>
  );
}
