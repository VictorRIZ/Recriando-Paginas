*Código para uma transição de light-theme para dark-theme(HTML, CSS & JS)*
(Futuramente usarei em algum dos meus projetos)
Crédito:https://codepen.io/lucas-labs/pen/wvBvEZq

*HTML*

<div class="container">
  <label class="switcher">
    <input type="checkbox" name="theme-switcher">
    <div>
      <i class="fas fa-sun"></i>
      <i class="fas fa-arrow-right arrow"></i>
      <i class="fas fa-moon"></i>  
    </div>
  </label>
</div>
(Ele usou alguns icons, lembrar de baixar, ou copiar o link do site que possui icons)

*CSS*

html {
  --bg: #1d1f20;
  --switcher-bg: #232527;
  --shadow-color: #000000b0;
  --color-text: #777;
  --color-text-active: #7489ff;
  --color-arrow: #88888852;
}

html[data-theme='light'] {
  --bg: #FCFCFC;
  --switcher-bg: #fff;
  --shadow-color: #00000044;
  --color-text: #88888895;
  --color-text-active: #7489ff;
  --color-arrow: #656565;
}

body {
    transition: background-color 400ms cubic-bezier(0.995, -0.265, 0.855, 0.505);
		text-align: center;
    margin:0px;
    font-size:1.5em;
		color: var(--color-text);
		background: var(--bg);
}

.container {
  transition: background-color 400ms cubic-bezier(0.995, -0.265, 0.855, 0.505);
  height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}

.switcher {
  user-select: none;
  cursor: pointer;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px -2px var(--shadow-color);
  background: var(--switcher-bg);

  transition: background-color 400ms cubic-bezier(0.995, -0.265, 0.855, 0.505),
              box-shadow 100ms linear;
  
  &:hover {
    box-shadow: 0px 0px 30px -2px var(--shadow-color);
  }
    
  .arrow {
    margin: 0px 20px;
    color: var(--color-arrow);
    transition: all 400ms cubic-bezier(0.995, -0.265, 0.855, 0.505);
  }
  
  input[type=checkbox] {
    height: 0;
    width: 0;
    display:none;
    
    +div>i {
      transition: all 400ms cubic-bezier(0.995, -0.265, 0.855, 0.505);
    }
    
    &:checked {
      +div {
        .arrow {
          transform: rotate(-180deg);
        }
        
        >:first-child {
          color: var(--color-text-active);
        }
      }
    }
    
    &:not(:checked) {
      +div {
        >:last-child {
            color: var(--color-text-active);
        }
      }
    }
  }
}

*JS*

var checkbox = document.querySelector(
  'input[name=theme-switcher]'
);

checkbox.addEventListener('change', function() {
  if(this.checked) {
    document.documentElement.setAttribute(
      'data-theme', 
      'light'
    )
  } else {
    document.documentElement.setAttribute(
      'data-theme',
      'dark'
    )
  }
});

*Outra opção de dark-theme(sem icon)*
Crédito:https://codepen.io/zenorocha/pen/qBmKezp


*HTML*

<body class="night">
  <div id="sun-moon"></div>
</body>

*CSS*

body {
  background-color: #F5F8F8;
  font-family: Arial, Helvetica, sans-serif;
  color: #a5abb0;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background-color .5s ease;
}

body.night {
  background-color: #3f3f4c;
}

p {
    position: relative;
    top: 15vh;
    text-align: center;
}

a {
    color: #2db1a0;
}

#sun-moon {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f5f8f8;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color .5s ease;
}

#sun-moon:before {
    content: "";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    background: #A5ABB0;
    transition: border-radius .5s ease, background-color .5s ease, width .5s ease, transform .5s ease;
}

#sun-moon:after {
    white-space: nowrap;
    text-indent: 60px;
    line-height: 45px;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #f5f8f8;
    box-shadow: 0 0 0 0 #f5f8f8, 0 0 0 3px #a5abb0, 0 0 0 100px #f5f8f8;
    box-sizing: border-box;
    transition: border-color .5s ease,box-shadow .5s ease;
}

body.night #sun-moon {
    background-color: #a5abb0;
}

body.night #sun-moon:before {
    background: #3f3f4c;
    border-radius: 50%;
    width: 150%;
    transform: translate(-5%,-35%) rotate(-25deg);
}

body.night #sun-moon:after { 
    box-shadow: 0 0 0 0 #3f3f4c, 0 0 0 0 #3f3f4c, 0 0 0 3px #a5abb0, 0 0 0 100px #3f3f4c;
    border-color: #3f3f4c;
}

*JS*

$("#sun-moon").click(function(){
  $("body").toggleClass('night day');
});

