const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Ryan é um garotinho de 4 anos, que possui autismo moderado (Nível 2), e sua mãe está a procura de uma escolhinha para matricula-lô. Você acha que ele deveria ser matriculado em uma escola de ensino regular ou em uma escola especializada em educação para crianças autistas?",
        alternativa: [
            "Ryan deve ser matriculado em uma escola especializada em educação para crianças que possuem autismo, para que suas necesidades sejam atendidas corretamente.",
            "Ryan deve ser matriculado em uma escola de ensino regular, pois ele é uma criança como qualquer outra."
        ]
    },
    {
        enunciado: "Ryan completou 12 anos e sua mãe percebeu que ele tinha uma boa audição e gostava de escutar música, decidiu colocá-lo em uma escola de música, que instrumento Ryan deveria tocar?",
        alternativa: [
            "Flauta, pois é o instrumento favorito de Ryan, mas ele tem bastante dificuldade para tocar.",
            "Piano, pois ele tem facilidade em tocar, porém não é seu intrumento favorito."
        ]
    },
    {
        enunciado: "Com 19 anos, Ryan conheceu Isadora, uma garota muito bondoza que cuidava de crianças autistas, Ryan queria chamâ-la para sair, mas seus amigos disseram que não uma boa ideia, o que Ryan deve fazer?",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 04",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 05",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }

}

function respostaSelecionada(opcaoselecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Aqui vai um texto"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}