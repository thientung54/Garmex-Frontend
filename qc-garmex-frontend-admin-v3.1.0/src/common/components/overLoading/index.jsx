import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import MoonLoader from 'react-spinners/MoonLoader' //https://www.davidhu.io/react-spinners/
import "./style.scss";
// Can be a string as well. Need to ensure each key-value pair ends with ;
class OverLoading extends Component {
  constructor(props) {
    super(props);
    this.color = this.props.color;
    this.active = this.props.active;
    this.background = this.props.background;
  }
 
  render() {
    return (
        <LoadingOverlay active={this.active} spinner={<MoonLoader color={this.color} />} styles={{
            wrapper: {
              margin: 'auto'
            },
            overlay: (base) => ({
                ...base,
                background: this.background
              })
          }}/>
    );
  }
}

export default OverLoading;