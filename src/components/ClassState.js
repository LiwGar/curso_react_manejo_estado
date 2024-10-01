import React from "react";

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h1>
          ELiminar ClassState
        </h1>
        <p>
          Por Favor, escribe el código de seguridad.
        </p>
        <input 
          placeholder="Codigo de seguridad"/>

        <button>
          Comprobar
          </button>
      </div>
    )
  }
}

export default ClassState;