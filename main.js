const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "A1",
        alternativas: [
            {
                texto:"alternativa 01",
                afirmacao: "resultado 01"
            },
            {
                texto:"alternativa 02",
                afirmacao: "resultado 02"
            }   
        ]
    },
    {
        enunciado: "Ryan completou 12 anos e sua mãe percebeu que ele tinha uma boa audição e gostava de escutar música, então, decidiu colocá-lo em uma escola de música, que intrumento Ryan deveria tocar?",
        alternativas: [
            {
                texto: "Flauta, pois é o instrumento favorito Ryan, mas ele tem bastante dificuldade em tocar.",
                afirmacao: "resultado03"
            },
            {
                texto: "Piano, pois ele tem facilidade em tocar, porém não é seu instrumento favorito.",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: "Com 19 anos, Ryan conheceu Isadora, uma garota muito bondoza que cuidava de crianças autistas, Ryan queria chamá-la para sair, mas seus amigos disseram que não era uma boa ideia, o que Ryan deve fazer?",
        alternativas: [
            {
                texto: "Ryan não deve ouvir seus amigos e deve chamá-la para sair já que gosta dela.",
                afirmacao: "resultado 05"
            },
            {
                texto: "Ryan deve ouvir seu amigos e não chamá-la para sair.",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Paado alguns anos",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();