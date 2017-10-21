import React, { Component } from 'react';
import Word from './Word';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { en: 'hello', vn: 'xin chào', isMemorized: false },
                { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true },
                { en: 'afternoon', vn: 'buổi chiều', isMemorized: false },
            ]
        }
    }
    render() {
        const { words } = this.state;
        return (
            <div>
                { words.map(word => <Word key={word.en} {...word} />) }
            </div>
        );
    }
}

export default List;
