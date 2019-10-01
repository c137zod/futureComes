import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { SwipeableTextMobileStepper } from "../components/index";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
      }
    autoBind(this);
  }

  componentDidMount() {
    this.setState({
      data: this.props.users
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({ data: nextProps.data });
    }
  }

  render() {
    if (!this.state.data) return this.renderLoading();
    return (
      <div>
       <SwipeableTextMobileStepper data={this.state.data} />
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }
}

export default Carousel;
