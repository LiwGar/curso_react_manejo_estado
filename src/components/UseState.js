import React from "react";

function UseState({name}) {

  const [error, setError] = React.useState(false);

  return (
    <div>

      <h1>
        Eliminar {name}
      </h1>

      <p>
        Por Favor, escribe el código de seguridad.
      </p>

      {error && (
        <p>Error: El código es incorrecto</p>
      )}

      <input 
        placeholder="Codigo de seguridad"/>

      <button
        onClick={() => setError(!error)}>
        Comprobar
        </button>
    </div>
  );
};

export default UseState;