import React from 'react';
import FlexContainer from 'react-styled-flexbox';
import {Row, Row1, Row2} from '../styling/TotalCalculationStyles.js';
import {Line} from '../styling/AppStyles.js';


const TotalCalculation = (props) => {
    
    var nightsTotal = 3 //TODO make dynamic
    var price = props.price * nightsTotal
    var totalPrice = '$' + price.toString()
    var cleaningFee = '$' + props.cleaningFee
    var serviceFee = '$' + (price * .09).toFixed(2)
    var tax = '$' + (price * .08).toFixed(2);
    var total = (props.cleaningFee + price + (price * .09) + (price * .08)).toFixed(2);
    var grandTotal = '$' + total;
   

  return(
    <FlexContainer directionColumn={true}>
        <FlexContainer justifySpaceBetween={true}>
            <Row1>{`$${props.price} x ${nightsTotal} nights`}</Row1>
            <Row1>{totalPrice}</Row1>
        </FlexContainer>
        <Line/>
        <FlexContainer justifySpaceBetween={true}>
            <Row>Cleaning Fee</Row>
            <Row>{cleaningFee}</Row>
        </FlexContainer>
        <Line/>
        <FlexContainer justifySpaceBetween={true}>
            <Row>Service Fee</Row>
            <Row>{serviceFee}</Row>
        </FlexContainer>
        <Line/>
        <FlexContainer justifySpaceBetween={true}>
            <Row>Occupancy taxes and fees</Row>
            <Row>{tax}</Row>
        </FlexContainer>
        <Line/>
        <FlexContainer justifySpaceBetween={true}>
            <Row2>Total</Row2>
            <Row2>{grandTotal}</Row2>
        </FlexContainer>


    </FlexContainer>
  )
}


export default TotalCalculation;