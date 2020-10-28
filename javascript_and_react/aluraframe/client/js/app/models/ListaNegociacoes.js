class ListaNegociacoes {

    constructor(){
        this._negociacoes = []
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        
        /* 
        Reflect: reflete o contexto que é passado por parâmetro.
        Reflect.apply(this._armadilha, this._contexto, [this]);
        */
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }
    

}