import React, { Component } from 'react';
import BoxButton from './BoxButton';
import { connect } from 'react-redux';

class Box extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.value }</h3>
                <BoxButton />
            </div>
        );
    }
}

const mapState = state => ({ value: state.value });

export default connect(mapState)(Box);
