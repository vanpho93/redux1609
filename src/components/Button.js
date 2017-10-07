import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    const { dispatch } = this.props;
    const onClickAdd = () => dispatch({ type: 'ADD' });
    const onClickSub = () => dispatch({ type: 'SUB' });
    return (
        <div>
          <button className="btn btn-success" onClick={onClickAdd}>
            Add
          </button>
          <button className="btn btn-danger" onClick={onClickSub}>
            Sub
          </button>
        </div>
    );
  }
}

export default connect()(Button);
