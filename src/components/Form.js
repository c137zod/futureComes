import React, { Component } from 'react';
import autoBind from 'react-autobind';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as actions from '../store/futurama/actions';
import * as selectors from '../store/futurama/reducer';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        margin: '0 auto 1em',
        width: '80%',
        height: 'auto'
      },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
      marginLeft: '1em',
      marginRight: '1em',
    },
    dense: {
      marginTop: '1em',
    },
    menu: {
      width: 200,
    },
    button: {
        margin: '2em',
      },
});

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
        header: '',
        headerBarStatus: "Header",
        headerStatus: false,
        headerId: "standard-textarea",
        phone: '',
        phoneBarStatus: "Phone",
        phoneStatus: false,
        phoneId: "standard-textarea",
        text: '',
        textBarStatus: "Text",
        textStatus: false,
        textId: "standard-textarea",
        formInComplete: true,
        id: ''
        }
    autoBind(this);
  }

  componentDidMount() {
    this.setState({
        id: this.props.id
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.state.id) {
      this.setState({ id: nextProps.id });
    }
  }

  checkStatus() {
    if (this.state.headerStatus && this.state.phoneStatus && this.state.textStatus){
        this.setState({
            formInComplete: false
        });
    }
     if (this.state.headerBarStatus === "Error" || 
     this.state.header === "" ||
     this.state.phoneBarStatus === "Error" || 
     this.state.phone === "" ||
     this.state.textBarStatus === "Error" ||
     this.state.text === "" 
     ){
        this.setState({
            formInComplete: true
        },() => {});
       
    }
  }

  handleChangeHeader = (event) => {
    this.setState({
        header: event.target.value
    });
    const re = /^[a-z0-9_-]{4,80}$/;
	if (re.test(this.state.header) ) {
        this.setState({
            headerBarStatus: "Header",
            headerStatus: true
        });
	} else {
        this.setState({
            headerBarStatus: "Error",
            headerId: "filled-error",
            headerStatus: false
        });
    }
    this.checkStatus();
  };
  handleChangePhone = (event) => {
    const reg =/^[0-9_-]{0,80}$/;
    const re = /^[0-9_-]{7,12}$/;;
    if(event.target.value.match(reg)) {
        this.setState({phone: event.target.value});
      }
      if (re.test(this.state.phone) ) {
        this.setState({
            phoneBarStatus: "Phone",
            phoneStatus: true
        });
	} else {
        this.setState({
            phoneBarStatus: "Error",
            phoneId: "filled-error",
            phoneStatus: false
        });
    }
    this.checkStatus();
  };
  handleChangeText = (event) => {
    this.setState({text: event.target.value});
    const re = /^[a-z0-9_-]{1,128}$/;
	if (re.test(this.state.text) ) {
        this.setState({
            textBarStatus: "Text",
            textStatus: true
        });
	} else {
        this.setState({
            textBarStatus: "Error",
            textId: "filled-error",
            textStatus: false
        });
    }
    this.checkStatus();
  };

  onSubmitForm(event) {
    event.preventDefault();
    const comment = {
        header: this.state.header,
        text: this.state.text,
    }
    this.props.dispatch(actions.submitForm(this.state.id, comment));
    this.setState({
      header: "",
      phone: "",
      text: ""
    },() => {
    this.checkStatus()
  });
  }

  render() {
    const { classes  } = this.props;
    return (
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        <form className={classes.container} noValidate autoComplete="off">
      <TextField
        value={this.state.header}
        variant="outlined"
        id={this.state.headerId}
        placeholder="Placeholder"
        multiline
        label={this.state.headerBarStatus}
        onChange={this.handleChangeHeader}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        value={this.state.phone}
        variant="outlined"
        id={this.state.phoneId}
        label={this.state.phoneBarStatus}
        placeholder="Placeholder"
        multiline
        onChange={this.handleChangePhone}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        value={this.state.text}
        id={this.state.textId}
        label={this.state.textBarStatus}
        multiline
        onChange={this.handleChangeText}
        rows="4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Button 
      disabled={this.state.formInComplete}
      onClick={this.onSubmitForm}
      variant="contained" 
      className={classes.button}
      type='submit'>
        Add comment
      </Button>
      </form>
        </Typography>
      </Paper>
     
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

function mapStateToProps(state) {
    return {
      users: selectors.getUsers(state),
    };
  }
  
export default connect(mapStateToProps)(withStyles(styles)(Form));
