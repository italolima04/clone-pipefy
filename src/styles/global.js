import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

/*Zerar os componentes da página, e adequar para que possa ocupar o máximo do tamanhoi da página */
padrao {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

/* ocupar totalmente 100% da tela */
html, body, #root {
    height:100%;
} 

body{
    font:14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color:#333;
    -webkit-font-smoothing: antialiased !important; 
}

ul{
    list-style:none;
}

`