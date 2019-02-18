import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 1, label: 'Football' },
    { value: 2, label: 'BasketBall' },
    { value: 3, label: 'Hokey' }
]

class GameTypes extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChangeType(e);
    }
    render() {
        return (
            <Select onChange={this.handleChange} options={options} value={options[this.props.value-1]} />
        )
    }
}

export default GameTypes