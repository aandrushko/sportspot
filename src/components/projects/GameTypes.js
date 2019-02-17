import React from 'react';
import Select from 'react-select';

const options = [
    {value:1,label:'Football'},
    {value:2,label:'BasketBall'},
    {value:3,label:'Hokey'}
]

const GameTypes = (props) => {

    return (
            <Select options={options} value={options[0]}/>
    )
}

export default GameTypes