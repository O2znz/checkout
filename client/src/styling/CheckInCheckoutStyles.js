

window.styled.createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin|Rubik&display=swap');
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
  }
`

const Text = window.styled.span`
    font-size: 22px;
`

const Checkin = window.styled(Text)`
    margin-left: 16px;
    color: rgb(118, 118, 118);
    font-family: Cabin, sans-serif;
    font-weight: 200;
`

const Checkout = window.styled(Text)`
    margin-right: 16px;
    color: rgb(118, 118, 118);
    font-family: Cabin, sans-serif;
    font-weight: 200;
`

const Arrow = window.styled(Text)`
    color: rgb(72, 72, 72);  
`

export {Checkin, Checkout, Arrow}
