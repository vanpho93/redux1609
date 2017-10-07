import React, { Component } from 'react';
import Word from './Word';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        const { words } = this.props;
        return (
            <div>
                { words.map(word => <Word key={word.en} {...word} />) }
            </div>
        );
    }
}

const mapState = state => ({ words: state.words });

export default connect(mapState)(List);
