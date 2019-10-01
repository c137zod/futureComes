import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '20em',
        margin: '0 auto'
    },
  root: {
    padding: theme.spacing(3, 2),
    margin: '0 auto 1em'
  },
}));

function Comment(comments) {
 
  const classes = useStyles();
  return (
      <div className={classes.wrapper}>
    {Object.keys(comments).map((value, index) => (
    <div key={index}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        {comments[index].comment.header} 
        </Typography>
        <Typography component="p">
           {comments[index].comment.text} 
        </Typography>
      </Paper>
    </div>
    ))}
    </div>
  )
}

export { Comment };