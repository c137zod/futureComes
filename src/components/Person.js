import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  { Comment, Form } from "./index";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    margin: '5em auto',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '80%'
  },
  card: {
    width: '20em',
    minHeight: 'max-content',
    margin: '0 auto 1em',
  },
  media: {
    height: 340,
  },
  button: {
    display: 'block',
    height: '3em',
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  address: {
    textAlign: 'center',
    padding: theme.spacing(2),
    margin: '0 auto'
  }
}));

export default function Person(person) {
  const { value } = person;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={value.imgPath}
          title={value.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {value.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {value.position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography className={classes.address} variant="body2" color="textSecondary" component="p">
          {value.address.street},{value.address.suite},{value.address.city}
          </Typography>
      </CardActions>
    </Card>
        <Comment {...value.comments}/>
    </div>
    <Form  id={value.id}/>
    </div>
  );
}

export { Person };