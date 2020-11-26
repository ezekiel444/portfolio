import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

link, button{
   cursor: pointer;
}

*, link {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
}

body {
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    max-width: 100vw;
}

input, textarea{
   background-color: black; 
   color: blanchedalmond;
}

input:focus, textarea:focus{
    background-color: rgb(255, 255, 255); 
    color: black;
    outline: none;
 }



.header-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    .header-sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
}

h1,
h2 {
    font-family: 'Libre Baskerville', serif;
}

img {
    width: 100%;
}

.scrollTop {
    position: absolute;
    top: -1;
    right: 0;
}

.scrollTop :hover {
    color: rgb(99, 56, 64);
    transition: color 0.1s ease-out;
}
`

export default GlobalStyle