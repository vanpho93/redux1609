import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onAdd2 } = this.props;
    return (
        <div>
          <button className="btn btn-success" onClick={onAdd2}>
            Add
          </button>
        </div>
    );
  }
}

export default Button;
