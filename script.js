const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const shortBt = document.querySelector('.app__card-button--curto')
const longBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')


focoBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/foco.png')
})
shortBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/descanso-curto.png')
})
longBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/AluraCourse/Alura3-ManipulandoElementosNoDOM/Fokus/imagens/descanso-longo.png')
})