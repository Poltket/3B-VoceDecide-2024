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
                texto:" Ryan deve ser matriculado em uma escola especializada em educação de crianças que possuem autismo, para que suas necessidades sejam atendidas corretamente.",
                afirmacao: "Ryan foi matriculado em uma escola especializada em educação para crianças que possuem autismo e se adaptou muito bem."
            },
            {
                texto:" Ryan deve ser matriculado em uma escola de ensino regular, pois ele é uma criança como qualquer outra.",
                afirmacao: "Ryan foi matriculado em uma escola de ensino regular, sua adaptação foi um pouco demorada, porém, ocorreu muito bem."
            }   
        ]
    },
    {
        enunciado: "Ryan completou 12 anos e sua mãe percebeu que ele tinha uma boa audição e gostava de escutar música, então, decidiu colocá-lo em uma escola de música, que intrumento Ryan deveria tocar?",
        alternativas: [
            {
                texto: "Flauta, pois é o instrumento favorito de Ryan, mas ele tem bastante dificuldade em tocar.",
                afirmacao: "Com 12 anos ele foi colocado em uma escola de música e começou a tocar flauta, e mesmo com muita dificuldade no aprendizado ele não desistiu."
            },
            {
                texto: "Piano, pois ele tem facilidade em tocar, porém não é seu instrumento favorito.",
                afirmacao: "Com 12 anos ele começou a participar das aulas de piano, ele tocava muito bem, porém, não era o instrumento que ele gostaria de tocar."
            }
        ]
    },
    {
        enunciado: "Com 19 anos, Ryan conheceu Isadora, uma garota muito bondoza que cuidava de crianças autistas, Ryan queria chamá-la para sair, mas seus amigos disseram que não era uma boa ideia, o que Ryan deve fazer?",
        alternativas: [
            {
                texto: "Ryan não deve ouvir seus amigos e deve chamá-la para sair, já que gosta dela.",
                afirmacao: "Passado alguns anos, quando Ryan completou 19 anos resolveu chamar a garota que conheceu para sair, eles se entendiam muito bem e passaram um ótimo dia juntos."
            },
            {
                texto: "Ryan deve ouvir seus amigos e não chamá-la para sair.",
                afirmacao: "Passado alguns anos, Ryan ouviu seus amigos e decidiu não chamar a garota que conheceu para sair, ele acreditou que não era o momento certo para se relacionar com alguém. "
            }
        ]
    },
    {
        enunciado: "Passado alguns anos, Ryan se aprofundou nos estudos sobre autismo e com 25 anos foi chamado para palestrar sobre autismo e educação inclusiva, essa palestra poderia mudar o rumo de sua vida. Você acha que Ryan deve ir palestrar ou não?",
        alternativas: [
            {
                texto: "Sim, se é algo que pode mudar a vida dele para melhor, ele deve correr atrás.",
                afirmacao: "Com 25 anos, ele aceitou a proposta para palestrar sobre o autismo e educação inclusiva, com isso, ele recebeu novas propostas que fizeram sua carreira profissional e individual subir cada vez mais alto. "
            },
            {
                texto: " Não, uma simples palestra não pode mudar a vida de ninguém.",
                afirmacao: "Com 25 anos, Ryan rejeitou a proposta para palestrar sobre o austimo e a educação inclusiva, por ser uma pessoa autista ele não acreditava em si mesmo, e que poderia ter capacidade para enfrentar novos desafios e oportunidades."
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
    caixaPerguntas.textContent = " Sendo assim... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();