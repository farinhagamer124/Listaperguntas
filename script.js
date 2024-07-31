const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Voce gosta de pao?",
    alternativas:[ 
        {
            texto: "claro",
            afirmcao: "incrivel"
        },
        {
            texto: "sim",
            afirmcao: "incrivel"
        }
     
    ]
    },
        {
    enunciado: "pao é bao?",
    alternativas:[
        {
            texto: "sim e sim",
            afirmcao: "incrivel"
        },
        {
            texto: "obvio",
            afirmcao: "incrivel"
        }
     
    ]
    },
        {
    enunciado: "pao tem farinha?",
    alternativas:[
        {
            texto: "talvez",
            afirmcao: "incrivel"
        },
        {
            texto: "tem",
            afirmcao: "incrivel"
        }
      
    ]
    },
        {
    enunciado: "e pao com café, é bom?",
    alternativas:[
        {
            texto: "sempre",
            afirmcao: "incrivel"
        },
        {
            texto: "sim",
            afirmcao: "incrivel"
        }
      
    ]
    },
        {
    enunciado: "pao com manteiga ou geleia?",
    alternativas:[
        {
            texto: "qualy",
            afirmcao: "incrivel"
        },
        {
            texto: "geleia (la ele)",
            afirmacao: "incrivel"
        }
      
     
    ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of  perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSlecionada){
    const afirmacoes = opcaoSlecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    
}

function mostraResultado(){
    caixaPerguntas.textContent = "PARABENS VOCE AGORA É MACHO!";
    textoResultado.textContent = "com essas perguntas e resposta voce decidiu seu futuro...";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
