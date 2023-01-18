var carta0 = {
 nome: "Titã de Ataque",
  imagem : "https://nerdhits.com.br/wp-content/uploads/2022/05/eren-tita-ataque-attack-on-titan-1200x900.jpg",
  atributos: {
  ataque: 9,
  defesa: 7,
  poder: 2,
  agilidade: 6,
  inteligencia: 8,
  }
}
var carta1 = {
  nome: "Titã Encouraçado",
  imagem : "https://i.pinimg.com/originals/d4/79/1e/d4791e3a58f9aa4d139844502ddf9dc3.jpg",
  atributos: {
    ataque: 8,
    defesa: 9,
    poder: 1,
    agilidade: 4,
    inteligencia: 6,
  }
}
  var carta2 = {
    nome: "Titã Bestial",
    imagem : "https://trecobox.com.br/wp-content/uploads/2019/02/attack-on-titan-3-trailer-parte-2.jpg?w=640",
    atributos: {
      ataque: 3,
      defesa: 4,
      poder: 0,
      agilidade: 2,
      inteligencia: 9,
    }
}
  var carta3 = {
    nome: "Titã Mandibula",
    imagem: "https://tudodenerd.com.br/wp-content/uploads/2021/03/titan-mandibula.jpg",
    atributos: {
      ataque: 7,
      defesa: 5,
      poder: 0,
      agilidade: 9,
      inteligencia: 4,
    }
  }
  var carta4 = {
    nome: "Titã Martelo De Guerra",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/01/legiao_AXr8DYRJSBFk.png.jpeg",
    atributos: {
    ataque: 7,
    defesa: 8,
    poder: 9,
    agilidade: 3,
    inteligencia: 4,
  }
  }
  var carta5 = {
    nome: "Titã Colossal",
    imagem: "https://pbs.twimg.com/media/Es6CEDfXEAEN04p.jpg",
    atributos: {
      ataque: 4,
      defesa: 8,
      poder: 9,
      agilidade: 0,
      inteligencia: 6,
    }
  }
  var carta6 = {
    nome: "Titã Fêmea",
    imagem: "http://pm1.narvii.com/6387/0c2d60f27717bcb2ef4546a060d0000f310e3db2_00.jpg",
    atributos: {
      ataque: 8,
      defesa: 7,
      poder: 7,
      agilidade: 6,
      inteligencia: 5,
    }
  }
  var carta7 = {
    nome: "Titã de Transporte",
    imagem: "https://oxentesensei.com.br/wp-content/uploads/2021/06/attack-on-titan-quadrupede-02.jpg",
    atributos: {
      ataque: 6,
      defesa: 6,
      poder: 0,
      agilidade: 8,
      inteligencia: 8,
    }
  }
  
var cartas = [carta0, carta1, carta2, carta3, carta4, carta5, carta6, carta7]
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 8)
  cartaMaquina = cartas [numCartaMaquina]
  
  var numCartaJogador = parseInt(Math.random() * 8)
  
  while (numCartaJogador == numCartaMaquina) {
    numCartaJogador = parseInt(Math.random() * 8)
  }
    cartaJogador = cartas [numCartaJogador]
  console.log(cartaJogador)
  document.getElementById("btnJogar").disabled = false
  
  document.getElementById("escolha").innerHTML= "<h2>Escolha o seu atributo</h2>"
  
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo');
  
for (var i = 0; i < radioAtributos.length; i++) {
  if (radioAtributos[i].checked == true) {
    return radioAtributos[i].value
  }
 }
}

function jogar () {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado")
 
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado] 
  console.log(valorCartaJogador)
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!"
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu..."
} else {
  elementoResultado.innerHTML = "Empate"
}
  console.log(cartaMaquina)
  document.getElementById("btnJogar").disabled = true
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id= 'opcoes' class='carta-status'>";

var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " +
cartaJogador.atributos[atributo] + "&emsp; &emsp;";
  }
 var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>";

} 

function exibirCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina");
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
  var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id= 'opcoes' class='carta-status'>";

var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<div name='atributo' value='" + atributo + "'>" + atributo + ": " +
cartaMaquina.atributos[atributo];
  }
 var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

divCartaMaquina.innerHTML = "<br> <br> <br>" + moldura + nome + tagHTML + opcoesTexto + "</div>"
}

//note que nenhuma carta tem 10 em nenhum atributo, pois se houver iria passar a certeza de vitória em toda partida
