import React from 'react';
import FlexContainer from 'react-styled-flexbox';
import {Row} from '../styling/TotalCalculationStyles.js';
import {Line} from '../styling/AppStyles.js';


const TotalCalculation = (props) => {
    
    var nightsTotal = 3 //TODO make dynamic
    var price = props.price * nightsTotal
    var totalPrice = '$' + price.toString()
    var cleaningFee = '$' + props.cleaningFee
    var sf = (price * .09).toFixed(2)
    var serviceFee = '$' + sf.toString();
    var t = (price * .08).toFixed(2);
    var tax = '$' + t.toString();
   

  return(
    <FlexContainer directionColumn={true}>
        <FlexContainer justifySpaceBetween={true}>
            <Row>{`$${props.price} x ${nightsTotal} nights`}</Row>
            <Row>{totalPrice}</Row>
        </FlexContainer>
        <Line/>


    </FlexContainer>
  )
}


export default TotalCalculation;