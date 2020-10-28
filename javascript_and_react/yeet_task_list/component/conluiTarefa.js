const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
};

// Riscando a tarefa indicando que ela foi concluida;
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    // Pegando o elemnto pai do botão de concluir
    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

// Deixa o método "exportável"
export default BotaoConclui;

/*
Caso precise exportar mais de um método:
    export{
        BotaoConclui, concluirTarefa
    }
*/