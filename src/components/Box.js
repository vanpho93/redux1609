import React, { Component } from 'react';
import BoxButton from './BoxButton';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{ value }</h3>
                <BoxButton onAdd={this.addValue} />
            </div>
        );
    }
}

export default Box;
