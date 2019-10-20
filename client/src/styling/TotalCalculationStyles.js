import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`



const Row = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #484848;
  font-family: 'Cabin', sans-serif;
  margin-right: 6px;
  margin-top: 5px;
  margin-bottom: 5px;
`
const Row1 = styled(Row)`
  margin-top: 20px;
`
const Row2 = styled(Row)`
  font-weight: 400;
`


export {Row, Row1, Row2}
