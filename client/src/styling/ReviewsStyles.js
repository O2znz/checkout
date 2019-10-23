window.styled.createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`

const RatingStyle = window.styled.span`
  font-size: 12px;
  color: rgb(72, 72, 72);
  font-weight: 400;
  padding-left: 10px;
  font-family: Cabin, sans-serif;
`

const ReviewStyle = window.styled.span`
  font-size: 12px;
  color: #767676;
  font-family: Cabin, sans-serif;
  font-weight: 200;
  margin-left: 2px
`


export {RatingStyle, ReviewStyle}
