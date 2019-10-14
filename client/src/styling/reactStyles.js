import styled from 'styled-components'


const Box = styled.div`
  border: 1px solid grey;
  width: 300px;
  height: 300px;
  padding: 10px;
`
const NightlyRate = styled.span`
  font-size: 20px;
  color: #312B2B;
  padding-left: 10px;
`

const PerNight = styled.span`
  font-size: 12px;
  color: #312B2B;
`

const RatingStyle = styled.span`
  font-size: 12px;
  color: #312B2B;
  font-weight: bold;
  padding-left: 10px;
`

const ReviewStyle = styled.span`
  font-size: 12px;
  color: #979696;
`

const Line = styled.div`
  color:#BAB9B9;
  border-top: 1px solid
`



export {Line, Box, NightlyRate, PerNight, RatingStyle, ReviewStyle}

