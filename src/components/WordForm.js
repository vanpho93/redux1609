import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { dispatch } = this.props;
        const en = this.refs.txtEn.value;
        const vn = this.refs.txtVn.value;
        const isMemorized = this.refs.cbMemorized.checked;
        dispatch({ type: 'ADD_WORD', en, vn, isMemorized });
        this.refs.txtEn.value = '';
        this.refs.txtVn.value = '';
        this.refs.cbMemorized.checked = false;
    }

    render() {
        return (
            <div className="word-form">
                <input className="form-control" placeholder="English" ref="txtEn" />
                <br />
                <input className="form-control" placeholder="Vietnamese" ref="txtVn" />
                <br />
                <label><input type="checkbox" ref="cbMemorized" /> Memorized</label>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-primary" onClick={this.addWord}>
                        Add word
                    </button>
                    <button className="btn btn-warning">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(WordForm);
