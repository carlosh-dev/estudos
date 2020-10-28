class  MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model){
        //IF inline: antes do dois pontos VERDADEIRO, depois FALSO
        // String sem nada é FALSO
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}