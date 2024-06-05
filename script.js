const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Quem é o melhor vilão Jason ou Fred Krugger",
    alternativas: [
      "Jason ",
      "Fred"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1 ",
      "Resposta 2"
    ]
  }
];

let atual = 1;
let perguntaAtual;r

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado; 
  mostraAlternativas();
}

mostraPergunta();







