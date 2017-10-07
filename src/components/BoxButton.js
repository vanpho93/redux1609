import React, { Component } from 'react';
import Button from './Button';

class BoxButton extends Component {
  render() {
    return (
        <div>
          <Button onAdd2={this.props.onAdd} />
        </div>
    );
  }
}

export default BoxButton;
