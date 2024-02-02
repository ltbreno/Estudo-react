import React, { Fragment } from "react";
import { Navbar } from "./Components/navbar";
import { Article } from "./Components/article";
import "./styles/app.css"



// Componente em classe é uma classe que herda a classse Component do React,
// E retorna HTML dentro do metodo render()
class App extends React.Component {
  
  //metodo responsavel por renderizar o conteudo html do nosso componente
  render () {
    return (
     <>
      <Navbar />

      <section id="articles">
        <Article title="Exemplo" subtitle="Nasa" />

        <Article title="Exemplo 2"/>

        <Article title="Exemplo 3" />

        <Article title="Exemplo 4" />
      </section>
     </>
    );
  }
}

export default App;
