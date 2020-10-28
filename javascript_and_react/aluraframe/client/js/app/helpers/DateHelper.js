class DateHelper {
    
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static textoParaData(texto){
        
        /* Teste rápido com expressão regular. Caso não esteja 
            no formato correto é mostrado um erro.
        */
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('A data deve estar no formato yyyy-mm-dd');


        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)  
        /* 
        "..." : separa o array em parâmetros da função/método.
        Split: separa a string em um vetor.
        Map: passa por todo array modificando seus elementos.
        
        Arrow Function () => { ... }
        Obs.: Arrow function com apenas uma instrução
        não necessita de chaves nem return
        */

        )
    }

    static dataParaTexto(data){
        // No construtor de Date os meses começam em 0 (Janeiro = 0)
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }

}