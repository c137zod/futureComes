import React, { Component } from 'react';
import './App.css';
import { Content, Wrapper } from "./components/index";
import { connect } from 'react-redux';
import * as actions from './store/futurama/actions';
import * as selectors from './store/futurama/reducer';
import Carousel from './containers/Carousel';
import List from './containers/List';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchData());
  }

  render() {
    return (
    <div className="App">
       <Carousel data={this.props.users}/>
       <Wrapper>
          <List data={this.props.users}/>
          <Content data={this.props.currentUser}/>
       </Wrapper>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: selectors.getUsers(state),
    currentUser: selectors.getCurrentUser(state)
  };
}

export default connect(mapStateToProps)(App);
