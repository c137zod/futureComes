import React from 'react';
import { Person } from '.';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
root: {
  padding: theme.spacing(3, 2),
  margin: '5em auto',
  width: '20em',
  height: '2em'
},
}));

function Content(props) {
  const person = props.data
  const classes = useStyles();
  const renderLoading = () => {
    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        Select worker
        </Typography>
      </Paper>
    );
  }
  if (!person)  return renderLoading(); 
  return (
    <Person value={person}/>
  );
}

export default (Content);
