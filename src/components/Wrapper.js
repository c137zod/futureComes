import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '80em',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
  }
}));

export default function Wrapper(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
    {props.children}
    </div>
  );
}

export { Wrapper };