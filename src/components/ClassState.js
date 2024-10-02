import React from "react";

class ClassState extends React.Component {

  constructor(props) {
    super(props); //Se llama a la funcion super() Cuando querramos modificar this.state
    //en una clase, pero queremos que todo lo que haga hecho la clase que estamos extendiendo 
    //siga funcionando. enviando todas las props.
    
    this.state = {
      error: false,
    };
  };

  render() {
    return (
      <div>

        <h1>
          Eliminar {this.props.name}
        </h1>

        <p>
          Por Favor, escribe el código de seguridad.
        </p>

        {this.state.error && (
        <p>Error: El código es incorrecto</p>
        )}

        <input 
          placeholder="Codigo de seguridad"/>

        <button
          onClick={() => this.setState({error: !this.state.error})}>
          Comprobar
          </button>
      </div>
    );
  };
};

export default ClassState;