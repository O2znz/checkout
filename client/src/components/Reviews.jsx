import React from 'react';
import {RatingStyle, ReviewStyle} from '../styling/reactStyles.js'

var Reviews = (props) => {
    return (
    <div>
        <RatingStyle>{props.rating}</RatingStyle>
        <ReviewStyle>({props.reviewsCount} reviews)</ReviewStyle> 
    </div>
    )
}

export default Reviews;