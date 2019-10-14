import React from 'react';

var Reviews = (props) => {
    return (
    <div>{props.rating}({props.reviewsCount} reviews)</div>
    )
}

export default Reviews;