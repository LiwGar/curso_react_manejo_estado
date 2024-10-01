import React from "react";

class ClassState extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
    }
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