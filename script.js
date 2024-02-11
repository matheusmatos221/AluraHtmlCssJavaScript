const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco');
const shortBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const IniciarOuPausarBtnSpan = document.querySelector('#start-pause span')
const IniciarOuPausarBtnImg = document.querySelector('#start-pause img')

let tempoRestanteEmSegundos = 5;
let intervaloId = null;

const pauseAudio = new Audio("/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/sons/pause.mp3");
const playAudio = new Audio("/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/sons/play.wav");
const audioTempoFinalizado = new Audio("/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/sons/beep.mp3");


const switchMusica = document.querySelector("#alternar-musica");
const musica = new Audio("/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/sons/luna-rise-part-one.mp3");

musica.loop = true;

switchMusica.addEventListener("change", function () {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})



focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})
shortBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    shortBt.classList.add('active')
})
longBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longBt.classList.add('active')
})


function alterarContexto(contexto) {
    botoes.forEach(function unactive(botao) {
        botao.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;

        default:
            break;
    }
}

function zerarIntervaloId() {
    clearInterval(intervaloId)
    IniciarOuPausarBtnSpan.textContent = "Começar";
    IniciarOuPausarBtnImg.setAttribute('src', `/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/play_arrow.png`)
    intervaloId = null;
}


function iniciarOuPausar() {
    if (intervaloId) {
        pauseAudio.play();
        zerarIntervaloId();
        return
    }
    playAudio.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    IniciarOuPausarBtnSpan.textContent = "Pausar";
    IniciarOuPausarBtnImg.setAttribute('src', `/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/pause.png`)
}


const contagemRegressiva = () => {
    if (tempoRestanteEmSegundos <= 0) {
        audioTempoFinalizado.play();
        zerarIntervaloId();
        tempoRestanteEmSegundos = 5;
        alert("Tempo finalizado!");
        return
    }
    tempoRestanteEmSegundos -= 1;
    console.log('Temporizador: ' + tempoRestanteEmSegundos)
}

startPauseBtn.addEventListener('click', iniciarOuPausar)


