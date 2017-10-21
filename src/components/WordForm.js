import React, { Component } from 'react';

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    addWord() {
    }

    toggleForm() {
    }

    render() {
        return (
            <div>
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
                        <button className="btn btn-warning" onClick={this.toggleForm}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordForm;
