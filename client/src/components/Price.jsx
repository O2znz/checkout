import styled from 'styled-components';
import React from 'react';
import {NightlyRate, PerNight, GeneralText} from '../styling/reactStyles.js'


var Price = (props) => {
    return (
        <div className='price'>
           <PerNight><NightlyRate>${props.price}</NightlyRate> per price</PerNight>
        </div>
    )
}

export default Price;
