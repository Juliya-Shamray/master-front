const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
  body {
   font-family: "Manrope",sans-serif;
   margin: 0 auto;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   min-height: 100vh;

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a{
  text-decoration: none;
  color: inherit;
}
button{
  border: none;
  background-color: transparent;
  cursor: pointer;
  
}
  }
  .container {
    
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width:320px) {
        max-width: 375px;
}
    @media screen and (min-width:768px) {
        max-width: 744px;
}

    @media screen and (min-width:1400px) {
        max-width: 1280px;
    
}


}

`;
