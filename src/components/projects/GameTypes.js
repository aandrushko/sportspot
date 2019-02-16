import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    {key:1,text:'Football'},
    {key:2,text:'BasketBall'},
    {key:3,text:'Hokey'}
]

const GameTypes = (props) => {

    return (
        <div>
            <Dropdown options={options} fluid selection />
        </div>
    )
}

export default GameTypes