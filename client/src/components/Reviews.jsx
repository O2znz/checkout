import React from 'react';
import {RatingStyle, ReviewStyle} from '../styling/reactStyles.js';
import Star from 'react-star-rating-component';

var Reviews = (props) => {
    return (
    <div>
        <RatingStyle><Star starCount={1}/>
        {props.rating}</RatingStyle>
        <ReviewStyle>({props.reviewsCount} reviews)</ReviewStyle> 
    </div>
    )
}

export default Reviews;