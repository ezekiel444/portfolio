import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  /* dark shades of primary color*/
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  --max-width: 1170px;
  --fixed-width: 450px;
  --clr-orange-1: hsl(12, 83%, 98%);
  --clr-orange-2: hsl(14, 91%, 95%);
  --clr-orange-3: hsl(12, 89%, 89%);
  --clr-orange-4: hsl(13, 87%, 82%);
  --clr-orange-5: hsl(13, 88%, 68%);
  --clr-orange-6: hsl(13, 88%, 55%);
  --clr-orange-7: hsl(13, 74%, 49%);
  --clr-orange-8: hsl(13, 74%, 33%);
  --clr-orange-9: hsl(13, 73%, 25%);
  --clr-orange-10: hsl(13, 73%, 16%);
}



* {
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

link, .btn {
  display: inline-block;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: var(--transition);
}
.btn:hover {
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
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
`;

export default GlobalStyle