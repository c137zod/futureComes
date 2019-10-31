import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/futurama/actions';
import * as selectors from '../store/futurama/reducer';


const useStyles = makeStyles(theme => ({
  root: {
    width: '20em',
    maxWidth: 360
  },
  inline: {
    display: 'inline',
  },
  wrapper: {
    width: '20em',
    margin: '5em auto 0'
  },
  linksWrapper: {
    width: '20em',
    margin: '5em auto 0'
},
  link: {
    textDecoration: 'none'
},
  card: {
    width: '20em',
  },
}));

function AlignItemsList(props) {
  const classes = useStyles();
  const onRowClick = (userId) => {
     props.dispatch(actions.selectUser(userId));
 }
 
  let data = Object.values(props)[0];
  return (
      <div className={classes.wrapper}>
      <Router>
          <div className={classes.linksWrapper}>
    {data.map((value, _) => (
        <div key={value.id}>
        <Link 
        className={classes.link} 
        to={value.username}
        selected={value.username}
        onClick={() => onRowClick(value)}>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  src={value.imgPath} />
        </ListItemAvatar>
        <ListItemText
          primary={value.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 {value.position}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </Link>
    </div>
    ))}
    </div>
    </Router>
  </div>
  );
} 

function mapStateToProps(state) {
  return {
    users: selectors.getUsers(state),
  };
}

export default (connect(mapStateToProps)(AlignItemsList));

