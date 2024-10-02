import React from "react";

function UseState({name}) {

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if(!!loading) {
      setTimeout(() => {
        console.log("Iniciando Validacion");
  
        setLoading(false)
  
        console.log("Finalizando Validacion");
      }, 3000)
    }

    console.log("Terminando el efecto");
  }, [loading]);

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

      {loading && (
        <p>Cargando...</p>
      )}

      <input 
        placeholder="Codigo de seguridad"/>

      <button
        onClick={() => setLoading(true)}>
        Comprobar
        </button>
    </div>
  );
};

export default UseState;