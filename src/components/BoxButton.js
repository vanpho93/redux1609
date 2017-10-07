import React, { Component } from 'react';

class BoxButton extends Component {
  render() {
    const { onAdd } = this.props;
    return (
        <button className="btn btn-primary" onClick={onAdd}>
            Add
        </button>
    );
  }
}

export default BoxButton;
