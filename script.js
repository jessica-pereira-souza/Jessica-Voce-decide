const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper realistas. Qual o seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador.",
      "Isso é maravilhoso."
    ]
  },

  {
    enunciado: "Com a descoberta desta tecnologia chamada Inteligência Artificial (IA), uma professora de tecnologia de uma escola decidiu fazer uma sequência de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendidmento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas que teve na internet e conhecimentos próprios sobre o tema."
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

let atual = 0;
let perguntaAtual;

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





