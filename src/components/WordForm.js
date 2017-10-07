import React, { Component } from 'react';

export default class WordForm extends Component {
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
                    <button className="btn btn-warning" onClick={this.props.onHideForm}>
                        Cancel
                            </button>
                </div>
            </div>
        );
    }
}
