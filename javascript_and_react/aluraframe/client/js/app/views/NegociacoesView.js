class NegociacoesView extends View{
    
    constructor(elemento) {
        super(elemento);
    }

    template(model){
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${model.negociacoes.map(n =>
                 `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `
            ).join('')}
        </tbody>
        
        <tfoot>
                <td colspan=3></td>
                <td>
                ${
                    /* 
                    -- PROGRAMAÇÃO PROCEDURAL --
                    Array reduce: retorna o array como um unico resultado.
                    O segundo parametro é a inicialização da variavel TOTAL.
                     model.negociacoes.reduce((total,n) => total + n.volume, 0.0)
                    */
                    model.volumeTotal
                }
                </td>
        </tfoot>
        </table>
        `;
    }
}
