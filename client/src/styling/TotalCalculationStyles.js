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
  font-weight: 550;
  color: #484848;
  font-family: 'Cabin', sans-serif;
`



export {Row}
