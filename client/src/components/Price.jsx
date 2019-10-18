import React from 'react';
import {NightlyRate, PerNight} from '../styling/PriceStyles.js'


var Price = (props) => {
    var perNight = 'per night'
    var dollarSign = '$'

    return (
        <div className='price'>
           <PerNight>
               <NightlyRate>{dollarSign}{props.price}</NightlyRate>{perNight}
           </PerNight>
        </div>
    )
}

export default Price;
