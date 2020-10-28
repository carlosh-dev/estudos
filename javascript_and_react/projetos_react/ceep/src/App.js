import React, { Component } from "react";
import FormularioCadastro from "./components//FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {

  constructor(){
    super();
  
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  /*
  State: Serve para guardar valores/estado que podem vir a mudar com a interação do
  usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser
  passado como props!
  
  Props: Valores para a configuração de um componente, essas props são passadas pelo
  elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado 
  para a comunicação de componentes.
  */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
