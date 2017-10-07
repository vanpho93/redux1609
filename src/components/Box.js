import React, { Component } from 'react';
import BoxButton from './BoxButton';
import { connect } from 'react-redux';

class Box extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.val }</h3>
                <BoxButton />
            </div>
        );
    }
}

export default connect(state => ({ val: state.value }))(Box);
