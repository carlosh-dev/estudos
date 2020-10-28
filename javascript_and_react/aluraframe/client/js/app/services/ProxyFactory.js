class ProxyFactory{
    static create(objeto, props, acao){
        return new Proxy(objeto, {
            get(target, prop, receiver){
        /* O target é o objeto real, que é encapsulado pelo proxy.
        O prop é a propriedade que está sendo lida.
        O receiver é uma referência ao próprio proxy. */
                if(props.includes(prop) && ProxyFactory._isFuncao(target[prop])){
                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
        /* Aqui fica o Proxy. Proxy é um intermediário entre o controller e a 
        classe, para que não precisemos alterar o modelo de classe com funções
        que não fazem parte. Ele é útil quando queremos deixar os nossos modelos 
        mais limpos, sem várias armadilhas penduradas nos seus métodos. Por exemplo, 
        evitando pendurar um código de infraestrutura em nossos modelos.*/
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                if(props.includes(prop)){
                    target[prop] = value;
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _isFuncao(func){
        return typeof(func) == typeof(Function);
    }
}