const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: " Ryan é um garotinho de 4 anos, que possui autismo moderado (Nível 2), e sua mãe está a procura de uma escolinha para matriculá-lo. Você acha que ele deveria ser matriculado em uma escola de ensino regular ou em uma escola especializada em educação para crianças autistas?",
        alternativas: [
            {
                texto:" Ryan deve ser matriculado em uma escola especializada em educação de crianças que possuem autismo, para que suas necessidades sejam atendidas corrente.",
                afirmacao: "resultado 01"
            },
            {
                texto:" Ryan deve ser matriculado em uma escola de ensino regular, pois ele é uma criança como qualquer outra.",
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
        enunciado: "Passado alguns anos, Ryan se aprofundou nos estudos sobre autismo e com 25 anos foi chamado para palestrar sobre autismo e educação inclusiva, essa palestra poderia mudar o rumo de sua vida. Você acha que Ryan deve ir palestrar ou não?",
        alternativas: [
            {
                texto: "Sim, se é algo que pode mudar a vida dele para melhor, ele deve correr atrás.",
                afirmacao: "resultado 07"
            },
            {
                texto: " Não, uma simples palestra não pode mudar a vida de ninguém.",
                afirmacao: "resultado 08"
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