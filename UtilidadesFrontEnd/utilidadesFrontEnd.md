*Sites úteis para programação em front-end*

*UnDraw*
https://undraw.co/

Site que contêm imagens gratuitas em svg,podendo ser baixadas na cor que quiser.

*UI Gradients*
https://uigradients.com/
Site que mostra e exporta gradients em várias cores.

*LordIcon*
https://lordicon.com/
Site que permite baixar ícones animados.

*Atributo translate*

Usando o atributo Translate=no na sua aplicação, o nome da sua empresa(por exemplo) não será traduzido, preservando assim sua marca. Exemplo:
<h1 translate="no"> Quadrado redondo </h1>. Ou seja, assim o nome da sua empresa não sofrerá a tradução, caso alguém que não fale em português venha traduzir.

/*Sobre display*/

Display : block
Significa fora da caixa, ou seja, suponhamos que tenha uma header e uma div dentro dela.
Dentro dessa div, tem ul, li e a. Dentro dessa ul, existe outra ul e você quer deixa-la
fora dessa header, para depois usar a aba de aparecer e sumir ao passar o mouse. Nesse
caso usaríamos o display: block.

/*Atalhos do VSCode*/

Completar código --> Ctrl + Space
Mover linha pra cima/baixo --> Ctrl + seta pra cima/baixo

/*Nth-child*/

Comando no css para selecionar o "filho", geralmente utilizado em colunas, ou divs com nomes iguais.

:nth-child(4)*Quarto filho*
:nth-child(-n+3)*Três primeiros filhos*
:nth-child(odd) *Filhos ímpares*
:last-child *Último filho*
:first-child *Primeiro filho*
:nth-child(even) *Filhos pares*
:nth-last-child(2) *Penúltimo filho*

*Centralizar um elemento com duas linhas*

display: grid;
place-items: center;

<meta name="theme-color" content="#fff"> /*Esse comando vai definir a cor que aparecerá na barra superior dos browsers mobile*/

*Deixando o icon gradiente(instagram)*
 color: #9c47fc;
    margin-left: 1.2rem;
    background: -webkit-linear-gradient(#9c47fc, #c37f00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

Método para deixar os icons gradientes, utilizando a propriedade -webkit-linear-gradient. Bem semelhante ao background-gradient. Creio eu que é possível usar também em palavras, como h1, p.... Porque o icon quando não é imagem, é tratado como texto.

*Comando git rm*
git rm
rm -f .git/index.lock

(Caso ocorrer novamente o erro do index.lock, basta utilizar esse comando ai em cima.)
