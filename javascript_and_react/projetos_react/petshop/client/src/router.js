import inicializaCadastro from "./componentes/cadastro/componente-cadastro"
import inicizalizaFormEdicao from "./componentes/edita/form-edicao"
import inicializaTabela from "./componentes/lista/listagem-cliente"

const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/edita": inicizalizaFormEdicao
}

const rootDiv = document.querySelector('[data-container]')

const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname)

    rootDiv.innerHTML = ''
    const iniciaRota = rotas[window.location.pathname]

    rootDiv.appendChild(iniciaRota())
}

window.navegacao = navegacao

window.onpopstate = () =>{
    rootDiv.innerHTML = ''
    rootDiv.appendChild(rotas[window.location.pathname]())
}
export { navegacao }