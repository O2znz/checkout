import styled from 'styled-components';
import React from 'react';
import {NightlyRate} from '../styling/reactStyles.js'


var Price = (props) => {
    return (
        <div>
           <NightlyRate>${props.price}</NightlyRate> per night
        </div>
    )
}

export default Price;