import React, { Component } from 'react';
import { connect } from 'react-redux';

class Word extends Component {
    constructor(props) {
        super(props);
        this.removeWord = this.removeWord.bind(this);
        this.toggleForgot = this.toggleForgot.bind(this);
    }
    
    removeWord() {
        const { dispatch, en } = this.props;
        dispatch({ type: 'REMOVE_WORD', en });
    }

    toggleForgot() {
        const { dispatch, en } = this.props;
        dispatch({ type: 'TOGGLE_FORGOT', en });
    }

    render() {
        const { vn, en, isMemorized } = this.props;
        const color = isMemorized ? 'green' : 'red';
        return (
            <div className="word">
                <h3 style={{ color }}>{en}</h3>
                <p>{vn}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-danger" onClick={this.removeWord}>
                        remove
                    </button>
                    <button className="btn btn-warning" onClick={this.toggleForgot}>
                        forgot
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(Word);
