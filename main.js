const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Pergunta 01",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuncado: "Pergunta 02",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuncado: "Pergunta 03",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuncado: "Pergunta 04",
        alternativa: [
            "Alternativa 01",
            "Alternativa 02"
        ]
    },
    {
        enuncado: "Pergunta 05",
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
    atual++;
    mostraPergunta();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Aqui vai um texto"
    texto.caixaResultado.textContent = história;
    caixaAlternativas.textContent = "";
}