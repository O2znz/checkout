import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

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



export {Button, Box, NightlyRate, PerNight}

