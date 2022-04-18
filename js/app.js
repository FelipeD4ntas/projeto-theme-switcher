const circulo = document.querySelector('.circulo');
const lightSide = document.querySelector('.lightSide');
const darkSide = document.querySelector('.darkSide');
const imgLightside = document.querySelectorAll('.imgLightSide')
const imgDarkside = document.querySelector('.imgDarkSide');
const music = new Audio('./assets/audio/somSabreLuz.wav');
const body =  document.body
let particlesDarkside = null;
let particlesLightside = null;

function mudarDisplay(none, block) {
    block.style.display = 'block';
    none.style.display = 'none';
}

function manterLargura() {
    let medidas = darkSide.getBoundingClientRect();
    let largura = medidas.width;
    lightSide.style.width = `${largura}px`;
}

function trocaClasse(remover, adicionar) {
    circulo.classList.remove(remover);
    circulo.classList.add(adicionar);
}

function trocaArquivoJS(elemento, caminho) {
    elemento = document.createElement('script');
    elemento.setAttribute('src', caminho);
    body.appendChild(elemento);
}

function verificaClasse(nomeClass) {
    const estaNaEsquerda = nomeClass.includes('esquerda');

    if (estaNaEsquerda) {
        irParaLightside();
        return
    }
  
    irParaDarkside();
}

function FazerEfeitosSonoro() {
    music.play();
}



function trocouTema() {
  const nomeClass = circulo.classList.value;
  FazerEfeitosSonoro();
  verificaClasse(nomeClass);
  
};

function ativarAnimacao(img)  {
    img.style.display = 'block';
    img.style.transform = 'translateX(1000px)';
    img.style.animationDuration = '10s';
}

function desativarAnimacao(img)  {
    img.style.display = 'none';
    img.style.transform = 'translateX(0)';
    img.style.animationDuration = '0';
}

function irParaLightside() {
    manterLargura()
    trocaClasse('esquerda', 'direita');
    mudarDisplay(darkSide, lightSide);
    trocaArquivoJS(particlesLightside, 'js/lightside.js');
    body.style.backgroundImage = 'url(./assets/imagens/lightside.jpg)';
    imgLightside.forEach(ativarAnimacao);
    desativarAnimacao(imgDarkside);
}

function irParaDarkside() {
    trocaClasse('direita', 'esquerda');
    mudarDisplay(lightSide, darkSide);
    trocaArquivoJS(particlesDarkside, 'js/darkside.js');
    body.style.backgroundImage = 'url(./assets/imagens/darkside.jpg)';
    imgLightside.forEach(desativarAnimacao);
    ativarAnimacao(imgDarkside);
}


circulo.addEventListener('click', trocouTema);
claro.addEventListener('click', trocouTema);
escuro.addEventListener('click', trocouTema);