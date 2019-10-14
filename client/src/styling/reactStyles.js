import styled from 'styled-components'


const Box = styled.div`
  border: 2px solid gray;
  width: 400px;
  height: 500px;
  padding: 10px;
`
const NightlyRate = styled.span`
  font-size: 20px;
  color: #312B2B;
  padding-left: 10px;
`

const PerNight = styled.span`
  font-size: 14px;
  color: #312B2B;
`

const RatingStyle = styled.span`
  font-size: 14px;
  color: #312B2B;
  font-weight: bold;
  padding-left: 10px;
`

const ReviewStyle = styled.span`
  font-size: 14px;
  color: #979696;
`

const Line = styled.div`
  color:#BAB9B9;
  border-top: 1px solid;
  margin: 10px;
`

const GeneralText = styled.div`
  color: #312B2B;
  font-size: 14px;
  margin-top: 30px
`

const DatesBox = styled.div`
  border: 1px solid gray;
  width: 230 px;
  height: 30px;
  padding: 10px;
  margin:10px
`

const ReserveButton = styled.button`
  background: red;
  color: white;
  text-align: center;
  border-radius: 4px;
  width: 380px;
  padding: 20px;
  margin: 10px;
  font-size: 16px
`


export {ReserveButton, DatesBox, GeneralText, Line, Box, NightlyRate, PerNight, RatingStyle, ReviewStyle}

