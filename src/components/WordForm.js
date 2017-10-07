import React, { Component } from 'react';
import { connect } from 'react-redux';

function addWord(en, vn, isMemorized) {
    return { type: 'ADD_WORD', en, vn, isMemorized };
}

function toggleForm() {
    return { type: 'TOGGLE_FORM' };
}

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    addWord() {
        const en = this.refs.txtEn.value;
        const vn = this.refs.txtVn.value;
        const isMemorized = this.refs.cbMemorized.checked;
        this.props.addWord(en, vn, isMemorized);
        this.props.toggleForm();     
        this.refs.txtEn.value = '';
        this.refs.txtVn.value = '';
        this.refs.cbMemorized.checked = false;
    }

    toggleForm() {
        // const { dispatch } = this.props;
        // dispatch(toggleForm());       
        this.props.toggleForm(); 
    }

    render() {
        const { isShowForm } = this.props;
        const formStyle = isShowForm ? {} : { display: 'none' };
        const buttonStyle = isShowForm ? { display: 'none' } : {};
        return (
            <div>
                <div className="word-form" style={formStyle}>
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
                        <button className="btn btn-warning" onClick={this.toggleForm}>
                            Cancel
                        </button>
                    </div>
                </div>
                <button className="btn btn-warning" style={buttonStyle} onClick={this.toggleForm}>
                    Show Form
                </button>
            </div>
        );
    }
}

const mapState = state => ({ isShowForm: state.isShowForm });

export default connect(mapState, { toggleForm, addWord })(WordForm);
