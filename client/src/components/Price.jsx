import styled from 'styled-components';
import React from 'react';
import {NightlyRate, PerNight} from '../styling/reactStyles.js'


var Price = (props) => {
    return (
        <div>
           <PerNight><NightlyRate>${props.price}</NightlyRate> per night </PerNight>
        </div>
    )
}

export default Price;